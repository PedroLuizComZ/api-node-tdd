import { Request, Response, NextFunction } from "express";

export default function (req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ error: "No token provided" });
  }

  if(authorization !== process.env.AUTH_KEY){
    return res.status(401).send({ error: "Invalid token" });
  }

  next();
}
