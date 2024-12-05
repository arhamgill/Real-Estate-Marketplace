import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routers/auth.router.js";
dotenv.config();

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// Routers
app.use("/api/auth", authRouter);
