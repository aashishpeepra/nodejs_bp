const express = require("express")
const userControllers = require("../controllers/user.controller");

const router  = express.Router();

router.get("/login",userControllers.LOGIN)
router.post("/signup",userControllers.SIGNUP)
module.exports = router;