const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");
const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });


//signup
router.route("/signup").get( userController.renderSignupform).post(wrapAsync(userController.signup));


router

//login

router.route("/login").get( userController.renderLoginform).post(saveRedirectUrl ,passport.authenticate("local",{failureRedirect: "/login", failureFlash: true}), userController.login);

//logout
router.get("/logout", userController.logout);


module.exports = router;