const express = require("express");

const projectController = require("../controllers/projectController");

//Setting router
const router = express.Router();

//Routing
router.route("/").get(projectController.getProjectList);

router.route("/projects").get(projectController.redirectToFirstProject);

router.route("/projects/:id").get(projectController.getProject);

module.exports = router;
