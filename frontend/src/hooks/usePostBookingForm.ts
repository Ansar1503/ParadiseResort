import { useState } from "react";
import { postBookingForm } from "@/services/bookingServices";
import type { bookingForm } from "@/types/BookingType";

type UsePostBookingReturn = {
  loading: boolean;
  error: string | null;
  submitBooking: (payload: bookingForm) => Promise<any>;
};

export function usePostBookingForm(): UsePostBookingReturn {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitBooking = async (payload: bookingForm) => {
    try {
      setLoading(true);
      setError(null);
      const result = await postBookingForm(payload);
      return result;
    } catch (err: any) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Failed to submit booking";
      setError(message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    submitBooking,
  };
}
