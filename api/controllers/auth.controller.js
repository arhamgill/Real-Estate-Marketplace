import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return next(errorHandler(400, "Username already exists"));
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return next(errorHandler(400, "Email already exists"));
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User created",
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return next(errorHandler(400, "Invalid credentials"));
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return next(errorHandler(400, "Invalid credentials"));
    }
    res.status(200).json({
      success: true,
      message: "User logged in",
    });
  } catch (error) {
    next(error);
  }
};
