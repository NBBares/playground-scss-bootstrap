const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')
require('dotenv').config();

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));



const HomeRoutes = require("./server/routes/home.routes")
HomeRoutes(app)

app.listen(8000, () => console.log("The server is all fired up on port 8000"));
