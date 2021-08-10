import { app } from "../app";
import request from "supertest";

describe("Status Aplication", () => {

  it("should a return an request status code 200", async () => {
    const response = await request(app).get("/status");

    expect(response.status).toBe(200);
  });

  it("should return the api version", async () => {
    const response = await request(app).get("/status");

    expect(response.body).toEqual(
      expect.objectContaining({
        version: "v1.0.0",
      })
    );
  });
});
