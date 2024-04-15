const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDb = require("./config/dbConncetion");

const userRouter = require("./routes/userHandler");
const blogRouter = require("./routes/blogHandler");
const errorHandler = require("./middleware/errorHandler");

connectDb();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);
app.use(errorHandler);

console.log("app is working");

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}/`);
});
