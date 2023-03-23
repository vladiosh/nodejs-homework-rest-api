const express = require("express");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { schemas } = require("../../models/user");

const {
  signup,
  login,
  getCurrent,
  logout,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
} = require("../../controllers/auth");

const router = express.Router();

router.post("/signup", validateBody(schemas.signupSchemas), signup);

router.post("/login", validateBody(schemas.loginSchemas), login);

router.get("/verify/:verificationToken", verifyEmail);

router.post("/verify", validateBody(schemas.signupSchemas), resendVerifyEmail);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

module.exports = router;
