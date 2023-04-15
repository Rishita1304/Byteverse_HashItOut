const userProfile = require("../model/userProfile");

const login=async(req,res)=>{
   try{ const email=req.body.email;
    const password=req.body.password;
    const user=await userProfile.findOne({email:email});
    if(user.password===password)return res.status(200).json(user.email);
    else return res.status(400).json("Password not matched!")
} 
    catch(err){
        res.status(500).json(err.message)
    }
}
module.exports=login;