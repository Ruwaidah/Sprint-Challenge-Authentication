const server = require("./server.js");
const request = require("supertest");
const axios = require("axios");

describe("GET /", () => {
  it("has process .env.DB_ENV as 'testing'", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});

// describe("POST /api/auth/register", () => {
//   let user = { username: "8", password: "pass" };
//   it("testing register new user::", () => {
//     return request(server)
//       .post("/api/auth/register")
//       .send(user)
//       .expect(200, { id: 16, message: "register completed" });
//   });
// });

describe("POST /api/auth/login", () => {
  let user = { username: "123", password: "123" };
  it("testing Login  user::", () => {
    return request(server)
      .post("/api/auth/login")
      .send(user)
      .expect(function(res) {
        200, { message: "welcome", token: res.body.token };
      })
      .then(res => {
        expect(res.type).toMatch(/json/);
      });
  });

  it("testing wrong password", () => {
    return request(server)
      .post("/api/auth/login")
      .send({ username: "123", password: "1233" })
      .expect(function(res) {
        400, { message: "username or password incorrect! " };
      })
      .then(res => {
        expect(res.type).toMatch(/json/);
      });
  });

  //   it("auth Example", function() {
  //     return request(server)
  //       .post("/api/auth/login")
  //       .send({ username: "123", password: "123" })
  //       .then(res => {
  //         const token = res.body.token;
  //         return request(server)
  //           .get("api/jokes")
  //           .set("authorization", token)
  //           .then(res => {
  //             request(axios)
  //               .get("https://icanhazdadjoke.com/search")
  //               .set("accept", "application/json");
  //             expect(res.status).toBe(200);
  //             expect(Array.isArray(res.body)).toBe(true);
  //           });
  //       });
  //   });
});
