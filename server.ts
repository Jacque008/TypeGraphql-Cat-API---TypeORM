import "reflect-metadata";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { AppDataSource } from "./src/data-source";
import { createSchema } from "./src/schema";
import { CatResolver } from "./src/resolvers/CatResolver";

const main = async () => {
    const app = express();
    app.use(express.json());

    // Create database connection
    await AppDataSource.initialize();;
    // Create GraphQL schema
    const schema = await createSchema();

    // Setup GraphQL endpoint
    app.use(
        "/graphql", 
        graphqlHTTP((request, response, graphQLParams) =>({
        schema: schema,
        rootValue: CatResolver,
        graphiql: true,
        context: {
            request,
            response,
        }
    }))
    );

    // Start the server
    app.listen(4000, () =>
    console.log("Server started at http://localhost:4000/graphql")
    );
    };

    main().catch((err) => console.log(err));
 
