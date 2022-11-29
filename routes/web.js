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

router.get("/pos", (req, res) => {
    //console.log(">>>"+req.session);
    res.render("pos.hbs");
});

router.get("/kaos", (req, res) => {
    //console.log(">>>"+req.session);
    res.render("pos_kaos.hbs");
});

router.get("/keranjang", (req, res) => {
    //console.log(">>>"+req.session);
    res.render("keranjang.hbs");
});

router.get("/checkout", (req, res) => {
    //console.log(">>>"+req.session);
    res.render("pos_checkout.hbs");
});

module.exports = router;
