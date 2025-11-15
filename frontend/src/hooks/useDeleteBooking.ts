import { useState } from "react";
import { deleteBooking } from "@/services/bookingServices";

type UseDeleteBookingReturn = {
  loading: boolean;
  error: string | null;
  deleteBookingById: (id: string) => Promise<void>;
};

export function useDeleteBookings(): UseDeleteBookingReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteBookingById = async (id: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await deleteBooking(id);
      return response;
    } catch (err: any) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to delete booking";
      setError(message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    deleteBookingById,
  };
}
