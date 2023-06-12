const RideOffer = require("../model/Offer");

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

module.exports = Allrides;
