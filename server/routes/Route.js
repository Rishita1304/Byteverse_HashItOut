const express=require("express");
const request = require("../controllers/request");
const offer = require("../controllers/offerRide");
const User = require("../controllers/user");
const profile = require("../controllers/profile");
const login = require("../controllers/login");
const Allrides=require("../controllers/allrides")
const router=express.Router();
router.post("/request",request);
router.post("/register",User);
router.post("/allRides",Allrides);
router.post("/offerRide",offer);
router.get("/profile/:email",profile);
router.post("/login",login);
module.exports=router;