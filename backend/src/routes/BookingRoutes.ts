import { Router } from "express";
import { Routes } from "../constants/RouteConstants";
import {
  createBooking,
  deleteBooking,
  fetchBookings,
} from "../controller/BookingController";

const router = Router();

router.route(Routes.ROOT).post(createBooking).get(fetchBookings);
router.route(Routes.PARAMS).delete(deleteBooking);

export default router;
