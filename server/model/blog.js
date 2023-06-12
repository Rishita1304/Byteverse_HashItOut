const mongoose = require("mongoose");
const BlogSchema = new mongoose.Schema(
  {
    title: {type:String},
    img: {type:String},
    date: {type:String},
    time: {type:String},
    name: {type:String},
    post: {type:String},
    desc: {type:String},
  },
  { timestamps: true }
);
const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;