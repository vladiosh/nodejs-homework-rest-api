const express = require("express");

const { validateBody } = require("../../middlewares");

const { schemas } = require("../../models/user");

const { signup, login } = require("../../controllers/auth");

const router = express.Router();

router.post("/signup", validateBody(schemas.signupSchemas), signup);

router.post("/login", validateBody(schemas.loginSchemas), login);

module.exports = router;