import { NextFunction, Request, Response } from "express";
import { mainError } from "./mainError";

const buildErrorMessage = (err: mainError, res: Response) => {
  try {
    return res.status(404).json({
      name: err.name,
      message: err.message,
      status: err.status,
      success: err.success,
      stack: err.stack,
      error: err,
    });
  } catch (error) {
    console.log(error);
  }
};

export const handleError: any = (
  req: Request,
  res: Response,
  err: mainError,
  next: NextFunction
) => {
  return buildErrorMessage(err, res);
};
