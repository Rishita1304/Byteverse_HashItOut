const user=require("../model/userProfile");

const User=async(req,res)=>{
    const newUser=await user.create(req.body);
    res.status(201).json(newUser);
}
module.exports=User;