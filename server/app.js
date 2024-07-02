const express = require("express");
require("dotenv").config();
const cors = require("cors");
const authRoutes = require("../server/routes/authRoutes");
const mongoose = require("mongoose");
const app = express();
// middleware
app.use(express.json());
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}
main()
  .then(() => {
    console.log("Mongo is connected...");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/", authRoutes);

const port = 8080;
app.listen(port, () => {
  console.log(`Server is working on port ${port}`);
});
