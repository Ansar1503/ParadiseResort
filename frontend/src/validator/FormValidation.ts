import type { bookingForm } from "@/types/BookingType";

export const validateBookingForm = (data: bookingForm) => {
  const errors: Record<string, string> = {};

  if (!data.checkInDate) errors.checkInDate = "Check-in date is required.";
  if (!data.checkInTime) errors.checkInTime = "Check-in time is required.";
  if (!data.checkOutDate) errors.checkOutDate = "Check-out date is required.";
  if (!data.checkOutTime) errors.checkOutTime = "Check-out time is required.";
  if (
    data.checkInDate &&
    data.checkInTime &&
    data.checkOutDate &&
    data.checkOutTime
  ) {
    const checkIn = new Date(`${data.checkInDate}T${data.checkInTime}`);
    const checkOut = new Date(`${data.checkOutDate}T${data.checkOutTime}`);

    if (checkOut <= checkIn) {
      errors.checkOutDate = "Check-out must be after check-in.";
    }
  }

  return errors;
};
