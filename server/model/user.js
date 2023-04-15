const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
   name:{type:String,required:true},
   gender:{type:String,required:true},
   email:{type:String,required:true},
   phoneNo:{type:String,required:true},
   password:{type:Number,required:true},
   offer:{type:String,required:true}
  },
  { timestamps: true }
);
const user = mongoose.model("user", userSchema);
module.exports = user;
