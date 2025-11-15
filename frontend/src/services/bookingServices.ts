import { Routes } from "@/constant/RouteConstants";
import { api } from "@/lib/axios";
import type { FetchBookingsPayload, bookingForm } from "@/types/BookingType";

export const postBookingForm = async (payload: bookingForm) => {
  const response = await api.post(Routes.BOOKINGS, payload);
  return response.data;
};

export const fetchBookings = async (payload: FetchBookingsPayload) => {
  const response = await api.get(Routes.BOOKINGS, { params: payload });
  return response.data;
};
