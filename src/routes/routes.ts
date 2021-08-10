import { Router } from "express";
import authetication from "../middlewares/authetication";
import contractRouter from "./ContractRouter";
import statusRouter from "./StatusRouter";

const routes = Router();

routes.use("/status", statusRouter);
routes.use("/contract", authetication, contractRouter);

export default routes;
