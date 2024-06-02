const User = require("../model/User");
const Token = require("../model/token");
const crypto = require("crypto");
const sendEmail = require("../utils/sendEmail");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const bcrypt = require("bcryptjs");

exports.postPass = async (req, res) => {
  try {
    const emailSchema = Joi.object({
      email: Joi.string().email().required().label("Email"),
    });
    const { error } = emailSchema.validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    let user = await User.findOne({ email: req.body.email });
    if (!user)
      return res
        .status(409)
        .send({ message: "User with given email does not exist!" });

    // let token = await Token.findOne({ userId: user._id });
    // if (!token) {
    //   token = await new Token({
    //     userId: user._id,
    //     token: crypto.randomBytes(32).toString("hex"),
    //   }).save();
    // }

    const url = `${process.env.BASE_URL}/reset-password/${user._id}`;
    await sendEmail(user.email, "Password Reset", url);

    res
      .status(200)
      .send({ message: "Password reset link sent to your email account" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

// verify password reset link
exports.verifyPass = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      {
		_id: req.params.id
      },
      { $set: { isVerified: true } }
    );
    if (!user) return res.status(400).send({ message: "Invalid link" });
    return res.redirect(`${process.env.BASE_URL}/reset-password/${user._id}`)
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

//  set new password
exports.setPass = async (req, res) => {
  try {
    const passwordSchema = Joi.object({
      password: passwordComplexity().required().label("Password"),
    });
    const { error } = passwordSchema.validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ _id: req.params.id });
    if (!user) return res.status(400).send({ message: "Invalid link" });

    if (!user.isVerified) return res.status(404).json("User Not Found!");

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    user.password = hashPassword;
    await user.save();

    res.status(200).send({ message: "Password reset successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
