const express = require("express");

const { validateBody, authenticate } = require("../../middlewares");

const { schemas } = require("../../models/user");

const { signup, login, getCurrent, logout } = require("../../controllers/auth");

const router = express.Router();

router.post("/signup", validateBody(schemas.signupSchemas), signup);

router.post("/login", validateBody(schemas.loginSchemas), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

module.exports = router;
