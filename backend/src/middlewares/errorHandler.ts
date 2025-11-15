import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/AppError";
import { StatusCodes } from "../constants/StatusCodes";
import { Messages } from "../constants/Messages";

export const errorHandler = (
  err: AppError | Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.log("errors", err);
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }
  return res.status(StatusCodes.SERVER_ERROR).json({
    success: false,
    message: Messages.SERVER.ERROR,
  });
};
