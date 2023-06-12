const User = require("../model/User");
const RideOffer = require("../model/Offer");
const profile = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.findOne({ email: email });
    const offers = await RideOffer.find({ email: email });
    if (user) {
      return res.status(200).json(user);
    }
    return res.status(404).json("User Not found");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = profile;
