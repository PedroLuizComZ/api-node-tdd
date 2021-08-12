import { getManager } from "typeorm";

export default {
  async getCustumerByCpf(cpf: string) {
    const entityManager = getManager();

    return await entityManager.query(
      `SELECT * FROM custumer WHERE cpf like '${cpf}' `
    );
  },

  async getCustumerByTelephone(telephone: string) {
    const entityManager = getManager();

    return await entityManager.query(
      `SELECT * FROM custumer WHERE telefone like '${telephone}' `
    );
  },

  async getCustumerByCNPJ(cnpj: string) {
    const entityManager = getManager();

    return await entityManager.query(
      `SELECT * FROM custumer WHERE cnpj like '${cnpj}' `
    );
  },

};
