const Blogs = require("../models/blogModel");
const asyncHandler = require("express-async-handler");
const Blog = require("../models/blogModel");

//@desc Get all blog
//@route GET /api/blogs/all
//@access private
const getAllBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blogs.find().limit(10);
  res.status(200).json(blogs);
});

//@desc crate blog
//@route POST /api/blogs/post
//@access private
const postBlogs = asyncHandler(async (req, res) => {
  const { msg } = req.body;
  const user = req.user;
  console.log(req.body);
  if (!msg) {
    res.status(400);
    throw new Error("All fields are mandatory.");
  }
  console.log(user)
  const blog = await Blog.create({
    msg,
    user: user.username,
  });

  res.status(200).json({ message: "Posted!", blog });
});

module.exports = {
  getAllBlogs,
  postBlogs,
};
