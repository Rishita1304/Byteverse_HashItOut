const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    full_name: { type: String, required: true },
    mobile_number: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    password: { type:String, required: true },
  },
  { timestamps: true }
);
const userProfile = mongoose.model("userProfile", userSchema);
module.exports = userProfile;
