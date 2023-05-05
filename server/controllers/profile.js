const userProfile = require("../model/userProfile");
const RideOffer = require("../model/offer");
const profile = async (req, res) => {
  try {
    const email=req.body.email;
    const user=await userProfile.findOne({email:email});
        const offers=await RideOffer.find({email:email})
    if(user){return res.status(200).json({user,offers})}
    return res.status(400).jsonjson({user,offers});
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
const Allrides = async (req, res) => {
  const start = req.body.start;
  const destination = req.body.destination;
   
  const rides = await RideOffer.find({
    start: start,
    destination: destination,
  });
  if (rides) return res.status(200).json(rides);
  return false;
};

module.exports = profile;
