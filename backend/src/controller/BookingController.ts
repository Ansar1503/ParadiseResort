import { Request, Response } from "express";
import { Booking } from "../model/BookingSchema";
import { createBookingSchema } from "../validators/zod/BookingSchemas";

export const createBooking = async (req: Request, res: Response) => {
  try {
    const validated = createBookingSchema.parse(req.body);

    const booking = await Booking.create(validated);
    res.status(201).json(booking);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getBookings = async (req: Request, res: Response) => {

};
