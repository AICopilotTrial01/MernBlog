import User from "../models/user.model.js";
// importing the bcryptjs package
import bcryptjs from "bcryptjs";

export const signUp = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    !username === "" ||
    !email === "" ||
    !password === ""
  ) {
    return res.status(400).json({ message: "All fields are required" });
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
    res.status(500).json({ message: err.message });
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
