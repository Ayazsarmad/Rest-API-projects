import express from "express";
import dotenv, { config } from "dotenv";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/connectDB.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();
const app = express();

connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.json({ message: "this is a main page hmm" });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server is started on port: ${port}`);
});
