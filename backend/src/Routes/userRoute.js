const express = require("express");
const { createAuthor, logInUser } = require("../Controllers/userController");
const router = express.Router();

router.route("/authors").post(createAuthor);

router.route("/login").post(logInUser);

module.exports = router;
