const express = require("express");
var mysql = require("mysql");
var session = require("express-session");
var path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
    //console.log(">>>"+req.session);
    res.render("index.hbs");
});

module.exports = router;
