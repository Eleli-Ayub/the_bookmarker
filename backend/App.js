require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./API/Authapi");
const taskRouter = require("./API/Taskapi");
const { verifyJwt } = require("./Controllers/Authcontroller");
const port = process.env.PORT || 4000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

// connect to the database
// mongoose.connect(process.env.MONGO_URL, (error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Connection to db succesfull");
//   }
// });

app.use("/api/users", userRouter);
app.use("/api/task", verifyJwt, taskRouter);

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is running on port " + port);
  }
});

module.exports = app;
