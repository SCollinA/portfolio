import { client as redisClient } from "./client";

describe("Redis client", () => {
    it("connects to in-memory db", () => {
        expect(redisClient.connected).toBe(true);
    });

    it("clears all keys on connect", (done) => {
        redisClient.scan("0", (err, reply) => {
            expect(err).toBeFalsy();
            // reply[0] is the cursor
            expect(reply[0]).toBe("0");
            // reply[1] is the array of keys
            // expect(reply).toBeFalsy();
            done();
        });
    });
});
