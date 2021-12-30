const HomeController = require("../controllers/home.controller");

module.exports = app => {
    app.get("/", HomeController.index)
}