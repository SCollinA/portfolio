import Redis from "ioredis";

export const client = new Redis();

client.on("connect", () => {
    client.flushall();
});
