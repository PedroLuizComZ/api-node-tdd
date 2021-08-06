import { Router } from "express";
import statusRouter from "./StatusRouter";

const routes = Router();

routes.use("/status", statusRouter);

export default routes;
