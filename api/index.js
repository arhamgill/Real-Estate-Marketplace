import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routers/auth.router.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173/",
  })
);
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

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message,
  });
});
