//jshint esversion:6
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000 || process.env.PORT;
const router = require("./routes/Route");
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DATABASE_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to mongodb database");
  })
  .catch((err) => {
    console.log(err);
  });
mongoose.set("strictQuery", true);
app.use(express.json());
app.use(express.static("uploads"));
app.use(express.urlencoded({ extended: false }));
app.set("trust proxy", 1);
app.use(cors());
app.use("/api", router);
app.listen(3000, () => {
  console.log(`Server running at ${port}`);
});
