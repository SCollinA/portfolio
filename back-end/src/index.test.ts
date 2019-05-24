import { request } from "http";

describe("Portofolio server", () => {
    it("is listening on port 4020", () => {
        request("http://localhost:4020", (response) => {
            expect(response.statusCode).toBe(200);
        });
    });
});
