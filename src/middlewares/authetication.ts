import { Request, Response, NextFunction } from "express";
import ErrorMessage from "../utils/ErrorMessage";

export default function (req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return ErrorMessage(res , "No token provided")
  }

  if (authorization !== process.env.AUTH_KEY) {
    return ErrorMessage(res , "Invalid token")
  }

  next();
}
