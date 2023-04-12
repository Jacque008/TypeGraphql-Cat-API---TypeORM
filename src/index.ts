import "reflect-metadata";
import { AppDataSource } from "./data-source"

AppDataSource.initialize().then(async () => {
  console.log("Database connected");
}).catch((error) => {
  console.error("Error connecting to database", error);
});
