// importing all the required packages
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";

// import all the routes ;
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

// connecting to the database
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);
  }
}

const app = express();
const PORT = 8888;

// using the body parser as middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/test", (req, res) => {
  res.json({ message: "Hello World" });
});

// using the userRoutes
app.use("/api", userRoutes);

// use the auth routes
app.use("/api/auth", authRoutes);

// using middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ success: false, statusCode, message });
});
connectToDatabase();
