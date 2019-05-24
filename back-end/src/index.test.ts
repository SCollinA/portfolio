import { request } from "http";
import {
    // apollo,
    // config,
    server,
} from "./index";

describe("Portfolio server", () => {
    afterEach(() => server.close());
    it("is listening on port 4020", (done) => {
        // await server.listen(config.port, () => {
        //     console.log( // tslint:disable-line
        //         `🚀 Server ready at`,
        //         `http://localhost:${config.port}${apollo.graphqlPath}`,
        //     );
            request("http://localhost:4020", (response) => {
                expect(response.statusCode).toBe(200);
                // server.close();
                done();
            });
        });
    });
// });
