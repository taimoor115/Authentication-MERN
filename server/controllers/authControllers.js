const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");

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
