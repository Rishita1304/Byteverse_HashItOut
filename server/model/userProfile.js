const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    number: { type: Number, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
    password: { type:String, required: true },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
