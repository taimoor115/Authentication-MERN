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
router.post("/login", authControllers.registerUser);

module.exports = router;
