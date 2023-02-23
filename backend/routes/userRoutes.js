const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  getUserDetails,
  forgotPassword,
  resetPassword,
  updatePassword,
  signUpUser,
} = require("../controllers/userController");
const {registerClient} = require("../controllers/ClientFormController");
const {
  isAuthenticatedUser,
} = require("../middleware/authentication");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/user/signup").post(signUpUser);
router.route("/user/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:Token").put(resetPassword);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/client/register").post(registerClient);

module.exports = router;
