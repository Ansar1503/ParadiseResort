import { z } from "zod";

export const createBookingSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(5),
  checkInDate: z.string(),
  checkInTime: z.string(),
  checkOutDate: z.string(),
  checkOutTime: z.string(),
  message: z.string().optional(),
});
