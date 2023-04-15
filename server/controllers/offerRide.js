const RideOffer = require("../model/offer")

const offer=async({body},res)=>{
    try {
        const newOffer=new RideOffer(body);
        const Rideoffer=await newOffer.save();
        res.status(201).json(Rideoffer);   
    } catch (error) {
        res.status(500).json(error.message)
    }
    }
    
module.exports=offer;