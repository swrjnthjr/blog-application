const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDb = require("./config/dbConncetion");

const userRouter = require("./routes/userHandler");
const errorHandler = require("./middleware/errorHandler");

connectDb();

const app = express();

app.use(express.json());

app.use("/api/user", userRouter);
app.use(errorHandler);

console.log("app is working");

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}/`);
});
