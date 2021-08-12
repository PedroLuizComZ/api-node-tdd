import ConsultControler from "@controllers/ConsultControler";
import { Router } from "express";

const consultRouter = Router();

consultRouter.get("/cpf/:cpf", ConsultControler.findByCPF);
consultRouter.get("/telefone/:telephone", ConsultControler.findByTelephone);
consultRouter.get("/cnpj/:cnpj", ConsultControler.findByCNPJ);

export default consultRouter;
