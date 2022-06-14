const fs = require("fs");

const data = JSON.parse(fs.readFileSync(`${__dirname}/../data.json`));

//Helper function to display project list
exports.getProjectList = (req, res) => {
  const { projects } = data;
  res.render("index", { projects });
};

//Function that redirects to the first project in case of getting an get request to URL /projects
exports.redirectToFirstProject = (req, res) => {
  res.redirect("/projects/0");
};

//Function that gets individual project
exports.getProject = (req, res) => {
  const { projects } = data;
  const id = req.params.id;
  const project = projects[id];
  res.render("project", { project });
};
