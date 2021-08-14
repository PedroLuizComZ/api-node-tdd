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

    const ddd = telephone.substr(0, 2)
    const firstNumbers = telephone.length === 10 ? telephone.substr(2, 4) : telephone.substr(2, 5)
    const lastNumbers = telephone.length === 10 ? telephone.substr(6, 9) : telephone.substr(7, 10)

    return await entityManager.query(
      `SELECT p.phone from erp.people as p WHERE p.phone like '%${ddd}%${firstNumbers}%${lastNumbers}%' ' `
    );
  },

  async getCustumerByCNPJ(cnpj: string) {
    const entityManager = getManager();

    return await entityManager.query(
      `SELECT * FROM custumer WHERE cnpj like '${cnpj}' `
    );
  },

};
