require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./API/Authapi");

const port = process.env.PORT || 4000;

app.use(express.json());

// connect to the database
mongoose.connect(process.env.MONGO_URL, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connection to db succesfull");
  }
});

app.use("/api/users", userRouter);

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is running on port " + port);
  }
});
