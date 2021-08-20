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
      return ErrorMessage(res, "Cpf format is invalid");
    }

    const custumerResult: Custumer[] = await ConsultService.getCustumerByCpf(
      cpf
    );

    if (custumerResult.length < 1) {
      return ErrorMessage(res, "User not found");
    }

    let contractResult = await ConsultService.getContractsByClientId(
      custumerResult[0].id
    );

    return res.json({
      status: true,
      data: {
        owner: custumerResult,
        contact: custumerResult,
        contracts: contractResult,
      },
    });
  },

  async findByTelephone(req: Request, res: Response) {
    const { telephone } = req.params;

    if (telephone.length !== 11 && telephone.length !== 10) {
      return ErrorMessage(res, "Telephone format is invalid");
    }

    let custumerResult: Custumer[] =
      await ConsultService.getCustumerByTelephone(telephone);

    if (custumerResult.length < 1) {
      custumerResult = await ConsultService.getCustumerByCellPhonePrimary(
        telephone
      );

      if (custumerResult.length < 1) {
        custumerResult = await ConsultService.getCustumerByCellSecundary(
          telephone
        );

        if (custumerResult.length < 1) {
          return ErrorMessage(res, "User not found");
        }
      }
    }

    let contractResult = await ConsultService.getContractsByClientId(
      custumerResult[0].id
    );

    let ownerUser : Custumer[] = custumerResult;

    if (contractResult.length < 1) {
      const ownerId = await ConsultService.getContact(custumerResult[0].id);

      ownerUser = await ConsultService.getCustumerById(ownerId);

      contractResult = await ConsultService.getContractsByClientId(ownerId);
    }

    return res.json({
      status: true,
      data: {
        owner: ownerUser[0],
        contact: custumerResult[0],
        contracts: contractResult,
      },
    });
  },

  async findByCNPJ(req: Request, res: Response) {
    const { cnpj } = req.params;

    if (cnpj.length !== 14) {
      return ErrorMessage(res, "CNPJ format is invalid");
    }

    const custumerResult: Custumer[] = await ConsultService.getCustumerByCNPJ(
      cnpj
    );

    if (custumerResult.length < 1) {
      return ErrorMessage(res, "User not found");
    }

    let contractResult = await ConsultService.getContractsByClientId(
      custumerResult[0].id
    );

    return res.json({
      status: true,
      data: {
        owner: custumerResult,
        contact: custumerResult,
        contracts: contractResult,
      },
    });
  },
};
