import { buildSchema } from "type-graphql";
import { CatResolver } from "./resolvers/CatResolver";

export const createSchema = async () => {
  return await buildSchema({
    resolvers: [CatResolver],
  });
};

