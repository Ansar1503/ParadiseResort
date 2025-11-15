import { useState } from "react";
import { editBooking } from "@/services/bookingServices";
import type { bookingForm } from "@/types/BookingType";

type UseEditBookingReturn = {
  loading: boolean;
  error: string | null;
  editBookingById: (id: string, payload: bookingForm) => Promise<any>;
};

export function useEditBooking(): UseEditBookingReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const editBookingById = async (id: string, payload: bookingForm) => {
    try {
      setLoading(true);
      setError(null);

      const result = await editBooking(id, payload);
      return result;
    } catch (err: any) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to update booking";

      setError(message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    editBookingById,
  };
}
