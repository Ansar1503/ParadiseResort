import { z } from "zod";

export const createBookingSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters."),
  email: z.string().email("Invalid email format."),
  phone: z.string().min(5, "Phone number must be at least 5 digits."),
  checkInDate: z.string().nonempty("Check-in date is required."),
  checkInTime: z.string().nonempty("Check-in time is required."),
  checkOutDate: z.string().nonempty("Check-out date is required."),
  checkOutTime: z.string().nonempty("Check-out time is required."),
  message: z.string().optional(),
});
