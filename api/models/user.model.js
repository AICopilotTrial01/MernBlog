// models are the schema for the database, it is the blueprint for the data we are going to store in the database

import e from "express";
import mongoose from "mongoose";

// creating a schema for the user
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// creating a model for the user schema
const User = mongoose.model("User", userSchema);

export default User;
