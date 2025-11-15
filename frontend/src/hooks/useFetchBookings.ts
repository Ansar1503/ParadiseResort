import { useCallback, useEffect, useState } from "react";
import type { Booking, sortType } from "@/types/BookingType";
import { fetchBookings } from "@/services/bookingServices";

export function useFetchBookings(initialPage = 1, limit = 10) {
  const [page, setPage] = useState(initialPage);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<sortType>("newest");

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);

  const loadBookings = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetchBookings({
        page,
        limit,
        search,
        sort,
      });

      setBookings(res.data || []);
      setTotalPages(res.totalPages || 1);
      setTotalItems(res.totalItems || 0);
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          "Failed to fetch bookings. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, [page, limit, search, sort]);

  useEffect(() => {
    loadBookings();
  }, [loadBookings]);

  return {
    bookings,
    loading,
    error,
    page,
    totalPages,
    totalItems,
    search,
    sort,
    setPage,
    setSearch,
    setSort,
    refetch: loadBookings,
  };
}
