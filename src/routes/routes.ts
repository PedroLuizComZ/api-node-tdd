import { Router } from "express";
import authetication from "../middlewares/authetication";
import consultRouter from "./ConsultRouter";
import statusRouter from "./StatusRouter";

const routes = Router();

routes.use("/status", statusRouter);
routes.use("/consulta", authetication, consultRouter);

export default routes;
