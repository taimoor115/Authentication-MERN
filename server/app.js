const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const authRoutes = require("../server/routes/authRoutes");

const app = express();

app.use("/", authRoutes);

const port = 8080;
app.listen(port, () => {
  console.log(`Server is working on port ${port}`);
});
