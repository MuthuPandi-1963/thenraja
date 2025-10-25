import express from "express";
import cors from 'cors'
import DbConnect from "./db/dbConnect.js";
import { config } from "dotenv";
import { todoRoutes } from "./routes/todo.routes.js";

const app = express();
config();

app.use(express.json());
app.use(cors({
  origin : process.env.CLIENT_URL,
  credentials:true,
  methods : ["GET","POST","PUT","DELETE"]
}))
app.get("/", (req, res) => {
  console.log();
  return res.json({
    message: `Api running successfully ${req.originalUrl} ${req.host}`,
  });
});

app.use("/todo",todoRoutes)


const port = process.env.PORT || 3000

app.listen(port, async () => {
  await DbConnect();
  console.log(`server running successfully on port : ${port}` );
});
