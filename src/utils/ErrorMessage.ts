import { Response } from "express";

export default function ErrorMessage(res: Response, message: string) {
  return res.status(400).send({ status: false, error: message });
}
