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
var produksi = require("./../controllers/produksi");
var akunting = require("./../controllers/akunting");
var middle = require("./../controllers/middleware");

router.get("/", middle.login_handle, (req, res) => {
    res.render("index.hbs", {
        username: req.session.username,
    });
});

router.get("/login", (req, res) => {
    req.session.destroy();
    res.render("login.hbs");
});

router.post("/login_process", middle.login_process, (req, res) => {
    res.redirect("/");
});

router.get("/logout_process", middle.login_process, (req, res) => {
    req.session.destroy();
    res.redirect("/login");
});

router.get("/keranjang", middle.login_handle, (req, res) => {
    console.log("req.session.cart");
    //console.log(req.session.cart);
    res.render("keranjang.hbs", {
        username: req.session.username,
    });
});

router.get("/pos", middle.login_handle, (req, res) => {
    res.render("pos.hbs", {
        username: req.session.username,
    });
});

router.get("/kaos", middle.login_handle, (req, res) => {
    res.render("pos_kaos.hbs", {
        username: req.session.username,
    });
});

router.get("/checkout", middle.login_handle, (req, res) => {
    //console.log("req.session.chasier_id: " + req.session.chasier_id);
    res.render("pos_checkout.hbs", {
        chasier_id: req.session.chasier_id,
        username: req.session.username,
    });
});

router.get("/transaksi", middle.login_handle, (req, res) => {
    res.render("transaksi.hbs", {
        username: req.session.username,
    });
});

router.get("/akunting", middle.login_handle, (req, res) => {
    res.render("akunting.hbs", {
        username: req.session.username,
    });
});

router.get("/keranjang_add", middle.login_handle, (req, res) => {
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
        paper_bucket: req.query.paper_bucket,
        checked: "true",
    });

    req.session.cart = cart;
    res.json(req.session.cart);
});

router.get("/keranjang_edit", middle.login_handle, (req, res) => {
    var cart = req.session.cart;

    cart[req.query.key]["item_amount"] = req.query.item_amount;
    cart[req.query.key]["item_total_cost"] = parseInt(req.query.item_total_cost);

    req.session.cart = cart;
    res.json(req.session.cart);
});

router.get("/keranjang_edit_checked", middle.login_handle, (req, res) => {
    var cart = req.session.cart;

    cart[req.query.key]["checked"] = req.query.checked;

    req.session.cart = cart;
    res.json(req.session.cart);
});

router.get("/keranjang_delete", middle.login_handle, (req, res) => {
    var cart_new = [];

    for (var i = 0; i < req.session.cart.length; i++) {
        if (i != req.query.id_del) {
            cart_new.push(req.session.cart[i]);
        }
    }

    req.session.cart = cart_new;
    res.json(req.session.cart);
});

router.get("/keranjang_keep_unchecked", middle.login_handle, (req, res) => {
    var cart_new = [];

    for (var i = 0; i < req.session.cart.length; i++) {
        if (req.session.cart[i].checked != "true") {
            cart_new.push(req.session.cart[i]);
        }
    }

    req.session.cart = cart_new;
    res.json(req.session.cart);
});

router.get("/keranjang_list", middle.login_handle, (req, res) => {
    res.json(req.session.cart);
});

router.get("/pos", middle.login_handle, (req, res) => {
    res.render("pos.hbs", {
        username: req.session.username,
    });
});

router.get("/kaos", middle.login_handle, (req, res) => {
    res.render("pos_kaos.hbs", {
        username: req.session.username,
    });
});

router.get("/checkout", middle.login_handle, (req, res) => {
    res.render("pos_checkout.hbs", {
        username: req.session.username,
    });
});

router.get("/transaksi", middle.login_handle, (req, res) => {
    res.render("transaksi.hbs", {
        username: req.session.username,
    });
});

router.get("/akunting", middle.login_handle, (req, res) => {
    res.render("akunting.hbs", {
        username: req.session.username,
    });
});

router.get("/produksi", middle.login_handle, (req, res) => {
    res.render("produksi.hbs", {
        username: req.session.username,
    });
});

router.get("/datauser", middle.login_handle, (req, res) => {
    res.render("datauser.hbs", {
        username: req.session.username,
    });
});

router.get("/stok", middle.login_handle, (req, res) => {
    res.render("stok.hbs", {
        username: req.session.username,
    });
});

//Api
router.post("/product", product.insert_product);
router.get("/products", product.select_product);
router.get("/products/:id", product.select_product);
router.get("/product_size", product.select_all_product_size);
router.get("/product_color", product.select_all_product_color);
router.get("/product_variant", product.select_all_product_variant);
router.get("/product_arm_length", product.select_all_product_arm_length);

router.get("/papers", product.select_paper);

router.post("/customer", customer.insert_customer);
router.get("/customers", customer.select_customer);
router.get("/customer_priority", customer.select_customer_priority);

router.get("/chasiers", chasier.select_chasier);
router.post("/chasiers_insert", chasier.insert_chasier);
router.post("/chasiers_update", chasier.update_chasier);
router.get("/chasiers_delete/:idchasier", chasier.delete_chasier);

router.get("/produksi_select", produksi.select_produksi);
router.get("/produksi_delete/:idproduksi", produksi.delete_produksi);
router.post("/produksi_update", produksi.update_produksi);

router.get("/akunting_select", akunting.select_akunting);
router.get("/akunting_select_debit", akunting.select_akunting_debit);
router.get("/akunting_select_credit", akunting.select_akunting_credit);
router.get("/akunting_delete/:idakunting", akunting.delete_akunting);
router.post("/akunting_update", akunting.update_akunting);
router.post("/akunting_insert", akunting.insert_akunting);

router.get("/payments", payment.select_payment);

router.post("/transaction", transaction.insert_transaction);
router.get("/transactions", transaction.select_transaction);
router.get("/transaction/:idTransaction", transaction.select_transaction);
router.post("/transaction_item", transaction.insert_transaction_item);
router.get("/transaction_item", transaction.select_transaction_item);
router.get("/transaction_item/:idTransaction", transaction.select_transaction_item);
router.post("/transaction_item_paper", transaction.insert_transaction_item_paper);

module.exports = router;
