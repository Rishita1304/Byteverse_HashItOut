const Request = require("../model/booking")

const request=async({body},res)=>{
try {
    const newBooking=new Request(body);
    const booking=await newBooking.save();
    res.status(201).json(booking);   
} catch (error) {
    res.status(500).json(error.message)
}
}
module.exports=request