const user = require("../model/User");
const bcrypt = require('bcryptjs')

const Register=async(req,res)=>{
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
        const newUser = new user({
          name: req.body.name,
          number: req.body.number,
          age: req.body.age,
          gender: req.body.gender,
          email: req.body.email,
          password: hashedPassword,
        });
        const users = await newUser.save();
        res.status(200).json(users);
      } catch (err) {
        res.status(500).json(err.message)
      }
}
module.exports=Register;