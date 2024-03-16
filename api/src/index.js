// importing all the required packages
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// import all the routes ;
import userRoutes from "./routes/user.routes.js";

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
// mongoose
//   .connect(process.env.MONGODB)
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.log("Failed to connect to MongoDB", err);
//   });

const app = express();
const PORT = 8888;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/test", (req, res) => {
  res.json({ message: "Hello World" });
});

// using the userRoutes
app.use("/api", userRoutes);
