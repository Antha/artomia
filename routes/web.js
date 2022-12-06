//Comment
const express = require("express");
var mysql = require("mysql");
var session = require("express-session");
var path = require("path");
const router = express.Router();
var product = require("./../controllers/product");
var customer = require("./../controllers/customer");
var chasier = require("./../controllers/chasier");
var payment = require("./../controllers/payment");
var transaction = require("./../controllers/transaction");

router.get("/", (req, res) => {
    res.render("index.hbs");
});

router.get("/login", (req, res) => {
    req.session.cart = [];
    res.render("login.hbs");
});

router.get("/keranjang", (req, res) => {
    console.log("req.session.cart");
    //console.log(req.session.cart);
    res.render("keranjang.hbs");
});

router.get("/pos", (req, res) => {
    //console.log(">>>"+req.session);
    res.render("pos.hbs");
});

router.get("/kaos", (req, res) => {
    //console.log(">>>"+req.session);
    res.render("pos_kaos.hbs");
});

router.get("/checkout", (req, res) => {
    //console.log(">>>"+req.session);
    res.render("pos_checkout.hbs");
});

router.get("/transaksi", (req, res) => {
    //console.log(">>>"+req.session);
    res.render("transaksi.hbs");
});

router.get("/akunting", (req, res) => {
    //console.log(">>>"+req.session);
    res.render("akunting.hbs");
});

//Session
router.get("/keranjang_add", (req, res) => {
    var cart = req.session.cart || [];

    cart.push({
        product_id: req.query.product_id,
        product_name: req.query.product_name,
        product_color: req.query.product_color,
        product_size: req.query.product_size,
        product_pic_logo: req.query.product_pic_logo,
        item_net_cost: req.query.item_net_cost,
        item_amount: req.query.item_amount,
        item_total_cost: parseInt(req.query.item_total_cost),
    });

    req.session.cart = cart;
    res.json(req.session.cart);
});

router.get("/keranjang_edit", (req, res) => {
    var cart = req.session.cart;

    cart[req.query.key]["item_amount"] = req.query.item_amount;
    cart[req.query.key]["item_total_cost"] = parseInt(req.query.item_total_cost);

    req.session.cart = cart;
    res.json(req.session.cart);
});

router.get("/keranjang_list", (req, res) => {
    res.json(req.session.cart);
});

router.get("/pos", (req, res) => {
    //console.log(">>>"+req.session);
    res.render("pos.hbs");
});

router.get("/kaos", (req, res) => {
    //console.log(">>>"+req.session);
    res.render("pos_kaos.hbs");
});

router.get("/checkout", (req, res) => {
    //console.log(">>>"+req.session);
    res.render("pos_checkout.hbs");
});

router.get("/transaksi", (req, res) => {
    //console.log(">>>"+req.session);
    res.render("transaksi.hbs");
});

router.get("/akunting", (req, res) => {
    //console.log(">>>"+req.session);
    res.render("akunting.hbs");
});

router.get("/produksi", (req, res) => {
    //console.log(">>>"+req.session);
    res.render("produksi.hbs");
});

router.get("/datauser", (req, res) => {
    //console.log(">>>"+req.session);
    res.render("datauser.hbs");
});

router.get("/stok", (req, res) => {
    //console.log(">>>"+req.session);
    res.render("stok.hbs");
});

//Api
router.post("/product", product.insert_product);
router.get("/products", product.select_product);
router.get("/products/:id", product.select_product);
router.get("/product_size", product.select_all_product_size);
router.get("/product_color", product.select_all_product_color);
router.get("/product_variant", product.select_all_product_variant);
router.get("/product_arm_length", product.select_all_product_arm_length);

router.post("/customer", customer.insert_customer);
router.get("/customers", customer.select_customer);
router.get("/customer_priority", customer.select_customer_priority);

router.get("/chasiers", chasier.select_chasier);

router.get("/payments", payment.select_payment);

router.post("/transaction", transaction.insert_transaction);
router.get("/transactions", transaction.select_transaction);
router.get("/transaction/:idTransaction", transaction.select_transaction);
router.post("/transaction_item", transaction.insert_transaction_item);
router.get("/transaction_item", transaction.select_transaction_item);
router.get("/transaction_item/:idTransaction", transaction.select_transaction_item);

module.exports = router;
