const User = require("../Models/Usermodel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.signUp = async (req, res) => {
  const saltRounds = 10;

  //get data from the req from the body
  const { imageUrl, firstname, lastname, phoneNumber, email } = req.body;
  //   generate a hashed password from the body
  const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

  // generate a new user object from body data
  const newUser = new User({
    imageUrl,
    firstname,
    lastname,
    phoneNumber,
    email,
    password: hashedPassword,
  });

  try {
    // Save new user to db
    const user = await newUser.save();
    let token;

    try {
      // generate a token
      token = jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: "3h" });
    } catch (error) {
      // handle errors
      console.log(error);
      const err = new Error("Error!! Something went wrong!");
      return next(err);
    }
    // send data to the user if login was successful and token is valid
    res.status(200).json({
      message: "Sign up successful",
      login: true,
      data: { userId: user.id, email: user.email, token: token },
    });
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
};

module.exports.signIn = async (req, res, next) => {
  // get data from the user request
  const { email, password } = req.body;
  //   find if email exist in the user database
  const user = await User.findOne({ email: email });

  if (!user) {
    res.json({ msg: "Invalid details", login: false });
  } else {
    // verify if password is correct
    const compare = await bcrypt.compare(password, user.password);

    if (!compare) {
      res.json({ msg: "Wrong password", login: false });
    } else {
      // generate token if login is successful
      let token;
      try {
        token = jwt.sign({ email, password }, process.env.SECRET_KEY, {
          expiresIn: "3h",
        });
      } catch (error) {
        // display errors
        console.log(error);
        const err = new Error("Error!!Something went wrong");
        return next(err);
      }
      //   send back data to the user incase of successful login
      res.status(200).json({
        message: "Login Successful",
        login: true,
        data: { userId: user.id, email: user.email, token: token },
      });
    }
  }
};
const signOut = () => {
  console.log("Signed out");
};
