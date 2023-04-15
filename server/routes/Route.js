const express=require("express");
const request = require("../controllers/request");
const offer = require("../controllers/offer");
const router=express.Router();
router.post("/request",request);
router.post("/offerRide",offer);
module.exports=router;