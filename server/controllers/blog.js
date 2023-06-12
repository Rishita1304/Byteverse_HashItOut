const Blog = require('../model/blog')

exports.addBlog = async (req, res) => {
  try {
    const blogs = new Blog(req.body);
    const newBlog = await blogs.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

exports.getBlogs = async (req, res) => {
  try{
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  }catch(error){
    res.status(500).json(error.message);
  }
}

exports.getABlog = async (req, res) => {
  try{
    const aBlog = await Blog.findById(req.params.id);
    res.status(200).json(aBlog);
  }catch(err){
    res.status(500).json(err.message);
  }
}