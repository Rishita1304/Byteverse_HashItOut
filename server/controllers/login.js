const User = require("../model/userProfile");
const bcrypt = require('bcrypt')

const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if(!user) return res.status(404).json("User not found");

    // const validPassword = await bcrypt.compare(req.body.password, user.password)
    // !validPassword && res.status(400).json("Wrong password")

    return res.status(200).json(user)
  } catch (err) {
    res.status(500).json(err.message)
  }
};
module.exports = login;
