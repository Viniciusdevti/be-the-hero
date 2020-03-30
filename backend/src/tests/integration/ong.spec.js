const request = require("supertest");
const app = require("../../../src/app");
const connection = require("../../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });
  afterAll(async () => {
    await connection.destroy();
  });
  it("should be able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        name: "ongName",
        email: "ong@gmail.com",
        whatsapp: "5583988587412",
        city: "ongCity",
        uf: "pb"
      });
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});