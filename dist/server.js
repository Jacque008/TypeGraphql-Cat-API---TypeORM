"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const data_source_1 = require("./src/data-source");
const schema_1 = require("./src/schema");
const CatResolver_1 = require("./src/resolvers/CatResolver");
const main = async () => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    // Create database connection
    await data_source_1.AppDataSource.initialize();
    ;
    // Create GraphQL schema
    const schema = await (0, schema_1.createSchema)();
    // Setup GraphQL endpoint
    app.use("/graphql", (0, express_graphql_1.graphqlHTTP)((request, response, graphQLParams) => ({
        schema: schema,
        rootValue: CatResolver_1.CatResolver,
        graphiql: true,
        context: {
            request,
            response,
        }
    })));
    // Start the server
    app.listen(4000, () => console.log("Server started at http://localhost:4000/graphql"));
};
main().catch((err) => console.log(err));
//# sourceMappingURL=server.js.map