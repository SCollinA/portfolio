// import { client as redisClient } from "./client";
import { rateLimiter } from "./rateLimiter";

// const mockRequest = {
//     ip: "1.1.1.1",
// };
// const mockResponse = {
//     sendStatus: (statusCode: number) => statusCode,
// };
// const mockNext = () => true;

describe("Rate Limiter", () => {
    it("is a function", () => {
        expect(rateLimiter).toBeDefined();
    });

    // it("accepts req, res, and next parameters", () => {
    //     expect(() => rateLimiter(mockRequest, mockResponse, mockNext)).not.toThrow();
    // });

    // it("prevents more than twenty requests per twenty seconds", (done) => {
    //     for (let i = 0; i < 30; i++) {
    //         expect(() => rateLimiter(mockRequest, mockResponse, mockNext)).not.toThrow();
    //     }
    //     done();
    // })
});
