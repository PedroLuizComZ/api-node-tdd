import StatusControler from "@controllers/StatusControler";
import { Router } from "express";

const statusRouter = Router();

statusRouter.get("/", StatusControler.index);

export default statusRouter;
