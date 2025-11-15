import { Routes } from "@/constant/RouteConstants";
import { api } from "@/lib/axios";
import type { bookingForm } from "@/types/BookingType";

export const postBookingForm = async (payload: bookingForm) => {
  const response = await api.post(Routes.BOOKINGS, payload);
  return response.data;
};
