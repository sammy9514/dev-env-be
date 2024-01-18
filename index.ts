import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { mainApp } from "./mainApp";
import { mainConnection } from "./dbConfig";

dotenv.config();

const port = process.env.PORT;
const app: Application = express();

app.use(express());
app.use(cors());

mainApp(app);
const server = app.listen(port, () => {
  console.log("server is up and running");
  mainConnection();
});

process.on("uncaughtException", (error: Error) => {
  console.log("uncaughtException", error);

  process.exit(1);
});
process.on("unhandledRejection", (reason: any) => {
  console.log("unhandledRejection", reason);

  server.close(() => {
    process.exit(1);
  });
});
