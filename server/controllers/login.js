const userProfile = require("../model/userProfile");

const login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await userProfile.findOne({ email: email });
    if (user) {
      if (user.password === password) {
        const {password, ...other} = user._doc;
        return res.status(200).json({...other});
      }
      else return res.status(400).json("Password not matched!");
    } else return res.status(400).json("email not found");
  } catch (err) {
    res.status(500).json(err.message);
  }
};
module.exports = login;
