import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
// importing the bcryptjs package
import bcryptjs from "bcryptjs";

export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    !username === "" ||
    !email === "" ||
    !password === ""
  ) {
    return next(errorHandler(400, "Please fill in all the fields correctly"));
  }

  const hashedPassword = await bcryptjs.hash(password, 12);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(201).json({ message: "User created" });
  } catch (err) {
    next(err);
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  res.json({
    user: {
      email,
      password,
    },
  });
};
