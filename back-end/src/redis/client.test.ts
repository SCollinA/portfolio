import { client as redisClient } from "./client";

describe("Redis client", () => {
    it("connects to in-memory db", () => {
        expect(redisClient.server_info).toBeDefined();
    });
});
