
const request = require("supertest");
const app = require("./app");

describe("DevOps Student Portal Tests", () => {

    test("Health API returns HTTP 200", async () => {
        const response = await request(app)
            .get("/api/health");

        expect(response.statusCode).toBe(200);
    });

    test("Health API returns OK status", async () => {
        const response = await request(app)
            .get("/api/health");

        expect(response.body.status).toBe("OK");
    });

    test("Version API returns application version", async () => {
        const response = await request(app)
            .get("/api/version");

        expect(response.statusCode).toBe(200);
        expect(response.body.version).toBeDefined();
    });

    test("Homepage loads successfully", async () => {
        const response = await request(app)
            .get("/");

        expect(response.statusCode).toBe(200);
        expect(response.text).toContain("DevOps Student Portal");
    });

});
