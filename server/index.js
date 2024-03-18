const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./Routes/AuthRoute");

const app = express();
require("dotenv").config();
const { MONGO_URL, PORT } = process.env;

mongoose
  .connect(MONGO_URL, {})

  .then(() => console.log("Mongo_Db is connected successfully"))
  .catch((err) => console.log(err, "ERROR_"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/", authRoute);
