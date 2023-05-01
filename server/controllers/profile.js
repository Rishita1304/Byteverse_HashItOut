const userProfile = require("../model/userProfile");
const RideOffer = require("../model/offer");
const profile = async (req, res) => {
  try {
    const email=req.body.email;
    const user=await userProfile.findOne({email:email});
        const offers=await RideOffer.find({email:email})
    return res.status(200).json({user,offers})
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = profile;
