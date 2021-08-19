import { getManager } from "typeorm";

export default {
  async getCustumerByCpf(cpf: string) {
    const entityManager = getManager();

    return await entityManager.query(
      `SELECT
        p.id,
        p.type_tx_id,
        p.tx_id,
        p.name,
        p.name_2,
        p.postal_code,
        p.street,
        p.street_type,
        p.number,
        p.address_complement,
        p.neighborhood,
        p.client,
        p.email,
        p.birth_date,
        p.created,
        p.modified,
        p.phone,
        p.cell_phone_1,
        p.cell_phone_2,
        p.status
      from erp.people as p WHERE p.type_tx_id = 2 AND p.tx_id like '${cpf}' `
    );
  },

  async getCustumerByTelephone(telephone: string) {
    const entityManager = getManager();

    const ddd = telephone.substr(0, 2);
    const firstNumbers =
      telephone.length === 10 ? telephone.substr(2, 4) : telephone.substr(2, 5);
    const lastNumbers =
      telephone.length === 10
        ? telephone.substr(6, 9)
        : telephone.substr(7, 10);

    return await entityManager.query(
      `SELECT
        p.id,
        p.type_tx_id,
        p.tx_id,
        p.name,
        p.name_2,
        p.postal_code,
        p.street,
        p.street_type,
        p.number,
        p.address_complement,
        p.neighborhood,
        p.client,
        p.email,
        p.birth_date,
        p.created,
        p.modified,
        p.phone,
        p.cell_phone_1,
        p.cell_phone_2,
        p.status
      from erp.people as p WHERE p.phone like '%${ddd}%${firstNumbers}%${lastNumbers}%' `
    );
  },

  async getCustumerByCellPhonePrimary(telephone: string) {
    const entityManager = getManager();

    const ddd = telephone.substr(0, 2);
    const firstNumbers =
      telephone.length === 10 ? telephone.substr(2, 4) : telephone.substr(2, 5);
    const lastNumbers =
      telephone.length === 10
        ? telephone.substr(6, 9)
        : telephone.substr(7, 10);

    return await entityManager.query(
      `SELECT
        p.id,
        p.type_tx_id,
        p.tx_id,
        p.name,
        p.name_2,
        p.postal_code,
        p.street,
        p.street_type,
        p.number,
        p.address_complement,
        p.neighborhood,
        p.client,
        p.email,
        p.birth_date,
        p.created,
        p.modified,
        p.phone,
        p.cell_phone_1,
        p.cell_phone_2,
        p.status
      from erp.people as p WHERE p.cell_phone_1 like '%${ddd}%${firstNumbers}%${lastNumbers}%' `
    );
  },

  async getCustumerByCellSecundary(telephone: string) {
    const entityManager = getManager();

    const ddd = telephone.substr(0, 2);
    const firstNumbers =
      telephone.length === 10 ? telephone.substr(2, 4) : telephone.substr(2, 5);
    const lastNumbers =
      telephone.length === 10
        ? telephone.substr(6, 9)
        : telephone.substr(7, 10);

    return await entityManager.query(
      `SELECT
        p.id,
        p.type_tx_id,
        p.tx_id,
        p.name,
        p.name_2,
        p.postal_code,
        p.street,
        p.street_type,
        p.number,
        p.address_complement,
        p.neighborhood,
        p.client,
        p.email,
        p.birth_date,
        p.created,
        p.modified,
        p.phone,
        p.cell_phone_1,
        p.cell_phone_2,
        p.status
      from erp.people as p WHERE p.cell_phone_2 like '%${ddd}%${firstNumbers}%${lastNumbers}%' `
    );
  },

  async getContractsByClientId(clientId: number) {
    const entityManager = getManager();

    return await entityManager.query(
      `SELECT c.id,
      c.client_id,
      c.contract_number,
      c.collection_day,
      c.description,
      c.date,
      c.beginning_date,
      c.final_date,
      c.amount,
      c.status,
      c.cancellation_date,
      c.end_date,
      c.created,
      c.modified,
      c.v_stage,
      c.v_status From erp.contracts as c where c.client_id = ${clientId} `
    );
  },

  async getCustumerByCNPJ(cnpj: string) {
    const entityManager = getManager();

    return await entityManager.query(
      `SELECT
        p.id,
        p.type_tx_id,
        p.tx_id,
        p.name,
        p.name_2,
        p.postal_code,
        p.street,
        p.street_type,
        p.number,
        p.address_complement,
        p.neighborhood,
        p.client,
        p.email,
        p.birth_date,
        p.created,
        p.modified,
        p.phone,
        p.cell_phone_1,
        p.cell_phone_2,
        p.status
      from erp.people as p WHERE p.type_tx_id = 1 AND p.tx_id like '${cnpj}' `
    );
  },
};


