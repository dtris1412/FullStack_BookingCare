import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();

let initWebRoutes = (app) => {
  //GET HOME PAGE
  router.get("/", homeController.getHomePage);

  return app.use("/", router);
};

module.exports = initWebRoutes;
