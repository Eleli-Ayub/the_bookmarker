const { signIn, signUp } = require("../Controllers/Authcontroller");

const router = require("express").Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
module.exports = router;
