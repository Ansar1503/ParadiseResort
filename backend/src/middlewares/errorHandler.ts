import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";
import { StatusCodes } from "../constants/StatusCodes";

export const errorHandler = (
  err: AppError | Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {

  const statusCode =
    err instanceof AppError ? err.statusCode : StatusCodes.SERVER_ERROR;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Something went wrong",
  });
};
