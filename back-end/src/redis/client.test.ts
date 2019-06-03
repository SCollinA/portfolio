import { client as redisClient } from "./client";

describe("Redis client", () => {
    beforeAll((done) => {
        redisClient.on("ready", () => {
            done();
        });
    });

    it("connects to in-memory db", () => {
        expect(redisClient.status).toBe("ready");
    });

    it("clears all keys on connect", (done) => {
        redisClient.scan(0)
        .then((reply) => {
            // reply[0] is the cursor
            expect(reply[0]).toBe("0");
            // reply[1] is the array of keys
            done();
        });
    });
});
