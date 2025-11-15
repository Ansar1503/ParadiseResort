import { Router } from "express";
import { Routes } from "../constants/RouteConstants";
import { createBooking } from "../controller/BookingController";

const router = Router();

router.route(Routes.ROOT).post(createBooking);

export default router;
