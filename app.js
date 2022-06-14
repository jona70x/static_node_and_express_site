const express = require("express");

//Getting routes
const aboutRouter = require(`${__dirname}/routes/aboutRoutes`);
const projectRouter = require(`${__dirname}/routes/projectRoutes`);

const app = express();

//Middlewares
//Setting view engine
app.set("view engine", "pug");

//Setting json data reader
app.use(express.json());

//Setting static server
app.use("/static", express.static(`${__dirname}/public`));

//Routing
app.use("/about", aboutRouter);
app.use("/", projectRouter);

//Error handlers
//404 error handler
app.use((req, res, next) => {
  const err = new Error();
  err.message = "Oops! It seems that this webpage does not exist";
  err.status = 404;
  res.render("page-not-found", { err });
});

//Global error handler
app.use((err, req, res, next) => {
  err.status = 500;
  err.message = "An error has occurred. Let us fix it for you.";
  res.render("error", { err });
});

//Running server
app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
