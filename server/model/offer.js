const mongoose = require("mongoose");
const OfferSchema = new mongoose.Schema(
  {
   email:{type:String,required:true},
   start:{type:String,required:true},
   destination:{type:String,required:true},
   date:{type:String,required:true},
   vacancy:{type:Number,required:true},
   price:{type:Number,required:true},
   type:{type:String,required:true},
   rating:{type:Number},
   post:{type:String}
  },
  { timestamps: true }
);
const RideOffer = mongoose.model("RideOffer", OfferSchema);
module.exports = RideOffer;