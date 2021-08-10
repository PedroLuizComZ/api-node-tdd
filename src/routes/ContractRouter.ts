import ContractControler from "@controllers/ContractControler";
import { Router } from "express";

const contractRouter = Router();

contractRouter.get("/cpf", ContractControler.findByCPF);

export default contractRouter;
