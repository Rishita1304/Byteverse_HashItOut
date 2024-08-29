const mongoose = require("mongoose");
const RequestSchema = new mongoose.Schema(
  {
   email:{type:String, required:true},
   pickup:{type:String,required:true},
   destination:{type:String,required:true},
   date:{type:String,required:true},
   vacancy:{type:String,required:true}
  },
  { timestamps: true }
);
const Request = mongoose.model("Request", RequestSchema);
module.exports = Request;