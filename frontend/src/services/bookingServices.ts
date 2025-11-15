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

export const deleteBooking = async (id: string) => {
  const response = await api.delete(`${Routes.BOOKINGS}${Routes.PARAMS}${id}`);
  return response.data;
};

export const editBooking = async (id: string, payload: bookingForm) => {
  return await api.put(`${Routes.BOOKINGS}${Routes.PARAMS}${id}`, payload);
};
