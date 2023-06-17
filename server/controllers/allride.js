const RideOffer = require("../model/offers");

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

exports.updateRides = async({params,body},res) => {
  try{

    const id=params.id
    const vacancy = body.vacancy;
    const rides = await RideOffer.findByIdAndUpdate(
      {_id: id} ,
      { $set: {vacancy:vacancy-1} }
      );
      res.status(200).json(rides);
    }catch(err){
      res.status(500).json(err.message);
    }

}

module.exports = Allrides;