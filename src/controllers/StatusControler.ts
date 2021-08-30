import { Request, Response } from "express";

export default {
  async index(_req: Request, res: Response) {
    return res.json({
      version: "v1.0.1",
    });
  },
};
