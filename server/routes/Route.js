const express=require("express");
const router=express.Router();

const request = require("../controllers/request");
const offer = require("../controllers/offerRide");
// const Register = require("../controllers/request");
const profile = require("../controllers/profile");
// const login = require("../controllers/login");
const Allrides = require("../controllers/allride");
const { register } = require("../controllers/auth");
const { login } = require("../controllers/auth");

router.post("/request", request);
router.post("/register", register);
router.post("/allRides", Allrides);
router.post("/offerRide", offer);
router.get("/profile/:email", profile);
router.post("/login", login);

module.exports=router;