import ConsultControler from "@controllers/ConsultControler";
import { Router } from "express";

const consultRouter = Router();

consultRouter.get("/cpf/:cpf", ConsultControler.findByCPF);

export default consultRouter;
