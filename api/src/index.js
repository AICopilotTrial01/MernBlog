// importing all the required packages
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Failed to connect to MongoDB", err);
  });

const app = express();
const PORT = 8888;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
