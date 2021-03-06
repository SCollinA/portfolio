// import { NextFunction, Request, Response } from "express";
import { client as redisClient } from "./client";

const RATE_LIMIT = 100;

export function rateLimiter(req: any, res: any, next: any): void {
    // receive request
    // get bucket for ip from redis
    // incr bucket, if no exists, will be created at 0
    const reqIp = req.headers["x-forwarded-for"].split(/, /)[0];
    redisClient.incr(reqIp)
    .then((bucket) => {
        // set/update expiration date for key/value in redis
        return redisClient.expire(reqIp, 24 * 60 * 60 * 1000)
        .then(() => bucket);
    })
    .then((bucket) => {
        console.log("INCR bucket -> " + bucket, "ip", reqIp); // tslint:disable-line
        // for each request, set leak timeout for bucket
        // const leak =
        setTimeout(() => {
            redisClient.decr(reqIp)
            .then((decrBucket) => {
                console.log("DECR bucket -> " + decrBucket, "ip", reqIp); // tslint:disable-line
            });
        }, 60 * 1000);
        // check bucket
        // if not full
        if (bucket < RATE_LIMIT) {
            console.log("req approved"); // tslint:disable-line
            // call next
            next();
        } else {
            console.log("req denied"); // tslint:disable-line
            res.sendStatus(429);
        }
    });
}
