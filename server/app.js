const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();

const port = 8080;
app.listen(port, () => {
  console.log(`Server is working on port ${port}`);
});
