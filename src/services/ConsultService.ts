import { getManager } from "typeorm";

export default {
  async getCustumerByCpf(cpf: any) {
    const entityManager = getManager();

    return await entityManager.query(
      `SELECT * FROM custumer WHERE cpf like '${cpf}' `
    );
  }
}
