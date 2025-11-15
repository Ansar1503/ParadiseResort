import { z } from "zod";

export const createBookingSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(5),
  checkIn: z.string(),
  checkOut: z.string(),
  guests: z.number().min(1),
  message: z.string().optional(),
});
