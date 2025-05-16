import express from "express";

let configViewEngine = (app) => {
  // Set the view engine to ejs
  app.set("view engine", "ejs");
  // Set the views directory
  app.set("views", "./src/views");
  // Set the static files directory
  app.use(express.static("./src/public"));

  return app;
};
module.exports = configViewEngine;
