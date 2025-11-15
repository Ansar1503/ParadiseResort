export const Messages = {
  BOOKING: {
    CREATED: "Booking created successfully.",
    FETCHED: "Bookings retrieved successfully.",
    NOT_FOUND: "Booking not found.",
    ALREADY_EXISTS: "Booking already exists",
    ID_NOT_FOUND: "Id is required",
    DELETED: "Booking Deleted Successfully",
  },
  DATE: {
    INVALID_CHECKIN_DATE: "Check-in date is invalid.",
    INVALID_CHECKOUT_DATE: "Check-out date is invalid.",
    CHECKIN_BEFORE_TODAY: "Checkin date is in the past",
    CHECKOUT_BEFORE_TODAY: "Checking date is in the past",
    CHECKOUT_AFTER_CHECKIN: "Check-out must be after the check-in date.",
    SAME_DATE_NOT_ALLOWED: "Check-in and check-out cannot be the same.",
  },
  TIME: {
    INVALID_CHECKIN_TIME: "Check-in time is invalid.",
    INVALID_CHECKOUT_TIME: "Check-out time is invalid.",
  },
  SERVER: {
    ERROR: "Something went wrong on the server.",
  },
};
