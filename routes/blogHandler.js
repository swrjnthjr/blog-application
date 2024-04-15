const express = require("express");
const { getAllBlogs, postBlogs } = require("../controllers/blogControllers");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/post", validateToken, postBlogs);
router.get("/all", validateToken, getAllBlogs);

module.exports = router;
