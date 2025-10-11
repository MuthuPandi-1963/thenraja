import express, { json } from "express";
import DbConnect from "./db/dbConnect.js";
import { config } from "dotenv";
import { todoRoutes } from "./routes/todo.routes.js";

const app = express();
config();

app.use(express.json());

app.get("/", (req, res) => {
  console.log();
  return res.json({
    message: `Api running successfully ${req.originalUrl} ${req.host}`,
  });
});

app.use("/todo",todoRoutes)

app.listen(3000, async () => {
  await DbConnect();
  console.log("server running successfully");
});
