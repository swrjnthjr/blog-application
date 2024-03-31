const express = require("express");
const {
  createUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/userControllers");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/create", createUser);
router.post("/login", loginUser);
router.get("/details",validateToken, getCurrentUser);

module.exports = router;
