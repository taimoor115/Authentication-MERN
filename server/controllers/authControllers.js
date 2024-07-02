const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports.test = (req, res) => {
  res.json("Test is working fine...");
};

module.exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username) {
      return res.json({
        error: "name is required",
      });
    }
    if (!password || password.length < 8) {
      return res.json({
        error: "Password must be 8 characters",
      });
    }
    const existEmail = await User.findOne({ email });
    if (existEmail) {
      return res.json({
        error: "Email is already taken",
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

module.exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "User not found",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.json({
        error: "Wrong Password",
      });
    }

    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, username: user.username },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    }
  } catch (error) {
    console.log(error);
  }
};
