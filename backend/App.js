require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./API/Authapi");
const taskRouter = require("./API/Taskapi");
const activityRouter = require("./API/Activityapi");
const { verifyJwt } = require("./Controllers/Authcontroller");
const PORT = process.env.port || 4000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

// connect to the database
mongoose.connect(
  "mongodb+srv://the_bookmarker:bookmark@thebookmarker.esne3by.mongodb.net/users?retryWrites=true&w=majority",
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Connection to db succesfull");
    }
  }
);

app.use("/api/users", userRouter);
app.use("/api/task", verifyJwt, taskRouter);
app.use("/api/activity", verifyJwt, activityRouter);

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is running on port " + PORT);
  }
});

module.exports = app;
