const express = require("express");
const { addBlog, getBlogs, getABlog } = require("../controllers/blog");
const router = express.Router();


router.post('/add', addBlog);
router.get('/find/all', getBlogs);
router.get('/:id', getABlog)

module.exports = router;