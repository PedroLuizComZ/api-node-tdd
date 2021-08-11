import { Request, Response } from "express";
import ConsultService from "../services/ConsultService";
import ErrorMessage from "../utils/ErrorMessage";

interface Custumer {
  id: number;
  cpf: string;
  telefone: string;
  nome: string;
}

export default {
  async findByCPF(req: Request, res: Response) {
    const { cpf } = req.params;

    if (cpf.length !== 11) {
      return ErrorMessage(res, "No cpf format is invalid");
    }

    const queryResult: Custumer[] = await ConsultService.getCustumerByCpf(cpf);

    if (queryResult.length < 1) {
      return ErrorMessage(res, "User not found");
    }

    return res.json({
      status: true,
      data: queryResult,
    });
  },
};
