import { Request, Response, NextFunction } from "express";
import { Booking } from "../model/BookingSchema";
import {
  createBookingSchema,
  fetchBookingsQuerySchema,
} from "../validators/zod/BookingSchemas";
import { StatusCodes } from "../constants/StatusCodes";
import { AppError } from "../utils/AppError";
import { Messages } from "../constants/Messages";

export const createBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const parsed = createBookingSchema.safeParse(req.body);
    if (!parsed.success) {
      const issue = parsed.error.issues[0];
      return next(new AppError(issue.message, StatusCodes.BAD_REQUEST));
    }

    const {
      checkInDate,
      checkInTime,
      checkOutDate,
      checkOutTime,
      email,
      name,
      phone,
      message,
    } = parsed.data;

    const checkIn = new Date(`${checkInDate}T${checkInTime}`);
    const checkOut = new Date(`${checkOutDate}T${checkOutTime}`);
    const now = new Date();

    if (isNaN(checkIn.getTime())) {
      return next(
        new AppError(
          Messages.DATE.INVALID_CHECKIN_DATE,
          StatusCodes.BAD_REQUEST
        )
      );
    }
    if (isNaN(checkOut.getTime())) {
      return next(
        new AppError(
          Messages.DATE.INVALID_CHECKOUT_DATE,
          StatusCodes.BAD_REQUEST
        )
      );
    }

    const existingBooking = await Booking.findOne({
      email,
      checkIn,
      checkOut,
    });

    if (existingBooking) {
      return next(
        new AppError(Messages.BOOKING.ALREADY_EXISTS, StatusCodes.BAD_REQUEST)
      );
    }
    if (checkIn.getTime() <= now.getTime()) {
      return next(
        new AppError(
          Messages.DATE.CHECKIN_BEFORE_TODAY,
          StatusCodes.BAD_REQUEST
        )
      );
    }
    if (checkOut.getTime() <= now.getTime()) {
      return next(
        new AppError(
          Messages.DATE.CHECKOUT_BEFORE_TODAY,
          StatusCodes.BAD_REQUEST
        )
      );
    }
    if (checkOut.getTime() <= checkIn.getTime()) {
      return next(
        new AppError(
          Messages.DATE.CHECKOUT_AFTER_CHECKIN,
          StatusCodes.BAD_REQUEST
        )
      );
    }

    const booking = await Booking.create({
      name,
      email,
      phone,
      checkIn,
      checkOut,
      message,
    });

    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: Messages.BOOKING.CREATED,
      data: booking,
    });
  } catch (error) {
    next(error);
  }
};

export const fetchBookings = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const parsed = fetchBookingsQuerySchema.safeParse(req.query);
    if (!parsed.success) {
      const issue = parsed.error.issues[0];
      return next(new AppError(issue.message, StatusCodes.BAD_REQUEST));
    }
    const { limit, page, search, sort } = parsed.data;

    const searchFilter =
      search?.trim()?.length > 0
        ? {
            $or: [
              { name: { $regex: search, $options: "i" } },
              { email: { $regex: search, $options: "i" } },
              { phone: { $regex: search, $options: "i" } },
            ],
          }
        : {};

    const sortOption =
      sort === "newest"
        ? { createdAt: -1 as const }
        : { createdAt: 1 as const };
    const skip = (page - 1) * limit;

    const totalItems = await Booking.countDocuments(searchFilter);
    const totalPages = Math.ceil(totalItems / limit);

    const data = await Booking.find(searchFilter)
      .sort(sortOption)
      .skip(skip)
      .limit(limit);

    return res.status(StatusCodes.SUCCESS).json({
      success: true,
      data,
      page,
      limit,
      totalItems,
      totalPages,
    });
  } catch (error) {
    next(error);
  }
};
