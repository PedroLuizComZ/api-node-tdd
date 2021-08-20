import { app } from "../app";
import request from "supertest";

describe("Consult Cpf Route", () => {
  it("validate if token is passing in Header", async () => {
    const response = await request(app).get("/consulta/cpf/0");

    expect(response.status).toBe(401);

    expect(response.body).toEqual(
      expect.objectContaining({
        status: false,
        error: "No token provided",
      })
    );
  });

  it("validate if token is valid", async () => {
    const response = await request(app)
      .get("/consulta/cpf/0")
      .set("Authorization", "abc123");

    expect(response.status).toBe(401);

    expect(response.body).toEqual(
      expect.objectContaining({
        status: false,
        error: "Invalid token",
      })
    );
  });

  it("should validate if cpf is passing", async () => {
    const response = await request(app)
      .get("/consulta/cpf/0")
      .set("Authorization", process.env.AUTH_KEY);

    expect(response.status).toBe(400);
    expect(response.body).toEqual(
      expect.objectContaining({
        status: false,
        error: "Cpf format is invalid",
      })
    );
  });

  it("should return a message if user was not found", async () => {
    const response = await request(app)
      .get("/consulta/cpf/99999999999")
      .set("Authorization", process.env.AUTH_KEY);

    expect(response.status).toBe(400);
    expect(response.body).toEqual(
      expect.objectContaining({
        status: false,
        error: "User not found",
      })
    );
  });

  it("should return user data if user was found", async () => {
    const response = await request(app)
      .get("/consulta/cpf/29516244688")
      .set("Authorization", process.env.AUTH_KEY);

    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty("owner");
    expect(response.body.data).toHaveProperty("contact");
    expect(response.body.data).toHaveProperty("contracts");
  });
});
