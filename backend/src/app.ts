import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler";
import { Routes } from "./constants/RouteConstants";
import bookingRouter from "./routes/BookingRoutes";
import "dotenv/config";
import { connectDB } from "./config/db";

export const app = express();

const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
const PORT = process.env.PORT || 5000;
connectDB();

app.use(
  cors({
    origin: [frontendUrl],
  })
);
app.use(express.json());

app.use(Routes.BOOKINGS, bookingRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
