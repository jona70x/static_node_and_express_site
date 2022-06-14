const express = require("express");

const aboutController = require(`../controllers/aboutController`);
const router = express.Router();

router.route("/").get(aboutController);

module.exports = router;
