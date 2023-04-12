"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSchema = void 0;
const type_graphql_1 = require("type-graphql");
const CatResolver_1 = require("./resolvers/CatResolver");
const createSchema = async () => {
    return await (0, type_graphql_1.buildSchema)({
        resolvers: [CatResolver_1.CatResolver],
    });
};
exports.createSchema = createSchema;
//# sourceMappingURL=schema.js.map