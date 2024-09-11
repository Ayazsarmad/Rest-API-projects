import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";

const app = express();

//middlewares
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "this is a main page hmm" });
});

app.listen(300, () => {
  console.log("server is started");
});
