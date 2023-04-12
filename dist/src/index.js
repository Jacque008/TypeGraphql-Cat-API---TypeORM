"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const data_source_1 = require("./data-source");
data_source_1.AppDataSource.initialize().then(async () => {
    console.log("Database connected");
}).catch((error) => {
    console.error("Error connecting to database", error);
});
//# sourceMappingURL=index.js.map