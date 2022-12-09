const { signIn, signUp, signOut } = require("../Controllers");

const router = require("express").Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/signout", signOut);
module.exports = router;
