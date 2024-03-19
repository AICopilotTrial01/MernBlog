import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
// importing the bcryptjs package
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
// json web token --> are used to secure the data that is being sent between the client and the server
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

export const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === "" || password === "") {
    return next(errorHandler(400, "Please fill in all the fields correctly"));
  }

  try {
    // check the email of the user
    const validUser = await User.findOne({ email: email });
    // if the email is not found and than return an error message
    if (!validUser) {
      return next(errorHandler(400, "Invalid email"));
    }
    // if the emails is found than compare the password)
    const validPassword = await bcryptjs.compareSync(
      password,
      validUser.password
    );
    if (!validPassword) {
      return next(errorHandler(400, "Invalid password"));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    // remove the password from the user object
    const { password: passwordPass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (err) {
    next(err);
  }
};
