import { Request, Response } from "express";
import ContractService from "../services/ContractService";
import ErrorMessage from "../utils/ErrorMessage";

interface Custumer {
  id: number;
  cpf: string;
  telefone: string;
  nome: string;
}

export default {
  async findByCPF(req: Request, res: Response) {
    const { cpf } = req.query;

    if (!cpf) {
      return ErrorMessage(res, "No cpf provided");
    }

    if (cpf.length !== 11) {
      return ErrorMessage(res, "No cpf format is invalid");
    }

    const queryResult: Custumer[] = await ContractService.getCustumerByCpf(cpf);

    if (queryResult.length < 1) {
      return ErrorMessage(res, "User not found");
    }

    return res.json({
      status: true,
      data: queryResult,
    });
  },
};
