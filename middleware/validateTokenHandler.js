const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = expressAsyncHandler(async (req, res, next) => {
  console.log("Validating token...");

  let token;
  let authHeader = req.headers.authorization || req.headers.Authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
  } else {
    token = authHeader;
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log("provided token is not valid.", token);
      res.status(401);
      throw new Error("user not authorized!");
    }

    console.log("User details decoded successfully", decoded);
    req.user = decoded.user;
    next();
  });

  if (!token) {
    console.log("Token not available");
    res.status(401);
    throw new Error("user not authorized!");
  }
});

module.exports = validateToken;
