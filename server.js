const express = require("express");
const path = require("path");

class Server {
  constructor() {
    this.app = express();
    this.port = 3000;

    this.configureMiddleware();
    this.configureRoutes();
    this.serveStatic();
  }

  serveStatic() {
    this.app.use(express.static(path.join(__dirname, "public")));
  }

  configureMiddleware() {
    this.app.set("view engine", "ejs");
    this.app.set("views", path.join(__dirname, "views"));
    this.app.set("partials", path.join(__dirname, "views/partials"));
  }

  configureRoutes() {
    this.app.get("/", (req, res) => {
      res.render("index", { message: "Hello, SSR!" });
    });

    this.app.get("/facts", (req, res) => {
      res.render("facts");
    });

    this.app.get("/for-against", (req, res) => {
      res.render("for-against");
    });
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
