const express = require("express");
const router = express.Router();
const cors = require("cors");
const authControllers = require("../controllers/authControllers");

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

router.get("/", authControllers.test);
router.post("/signup", authControllers.registerUser);
router.post("/login", authControllers.loginUser);
router.get("/profile", authControllers.getProfile);

module.exports = router;
