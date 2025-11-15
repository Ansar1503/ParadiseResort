import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/bookings");

app.use(errorHandler);
