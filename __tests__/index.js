const supertest = require("supertest");
const server = require("../api/server");



test("GET /", async () => {
    const res = await supertest(server).get("/api/jokes")
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8');
})

test("Register /", async () => {
    const res = await supertest(server).post("/api/auth/register")
    .send({username: "test11", password: "test11"})
    .expect(200)
}
)

test("LOGIN /", async () => {
    const res = await supertest(server).post("/api/auth/login")
    .send({username: "test", password: "test"})
    .expect(200)
})