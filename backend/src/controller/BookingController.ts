import { Request, Response, NextFunction } from "express";
import { Booking } from "../model/BookingSchema";
import { createBookingSchema } from "../validators/zod/BookingSchemas";
import { StatusCodes } from "../constants/StatusCodes";
import { AppError } from "../utils/AppError";

export const createBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const parsed = createBookingSchema.safeParse(req.body);

    if (!parsed.success) {
      const issue = parsed.error.issues[0];
      next(new AppError(issue.message, StatusCodes.BAD_REQUEST));
      return;
    }

    const booking = await Booking.create(parsed.data);

    res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Booking created successfully",
      data: booking,
    });
    return;
  } catch (error: any) {
    next(error);
    return;
  }
};

export const getBookings = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });

    res.status(StatusCodes.SUCCESS).json({
      success: true,
      data: bookings,
    });
    return;
  } catch (error: any) {
    next(error);
    return;
  }
};
