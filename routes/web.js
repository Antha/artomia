const express = require("express");
var mysql = require("mysql");
var session = require("express-session");
var path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
    //console.log(">>>"+req.session);
    res.render("index.hbs");
});

router.get("/login", (req, res) => {
    //console.log(">>>"+req.session);
    res.render("login.hbs");
});

module.exports = router;
