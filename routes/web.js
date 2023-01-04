//Comment
const express = require("express");
var mysql = require("mysql");
var session = require("express-session");
var path = require("path");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const mkdirp = require("mkdirp");
var product = require("./../controllers/product");
var customer = require("./../controllers/customer");
var chasier = require("./../controllers/chasier");
var payment = require("./../controllers/payment");
var transaction = require("./../controllers/transaction");
var produksi = require("./../controllers/produksi");
var akunting = require("./../controllers/akunting");
var product_kaos = require("./../controllers/product_kaos");
var product_papper = require("./../controllers/product_papper");
var product_sweater = require("./../controllers/product_sweater");
var product_tanktop = require("./../controllers/product_tanktop");
var product_topi = require("./../controllers/product_topi");
var product_totebag = require("./../controllers/product_totebag");
var product_polocap = require("./../controllers/product_polocap");
var product_panelcap = require("./../controllers/product_panelcap");
var product_truckercap = require("./../controllers/product_truckercap");
var middle = require("./../controllers/middleware");
const {v4: uuidv4} = require("uuid");

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../public/assets/akunting/"),
    filename: function (req, file, cb) {
        let extension = file.originalname.split(".").pop();
        file.id = uuidv4() + "." + extension;
        cb(null, file.id);
    },
});

const storagelogo = multer.diskStorage({
    destination: path.join(__dirname, "../public/assets/logopesanan/"),
    filename: function (req, file, cb) {
        let extension = file.originalname.split(".").pop();
        file.id = uuidv4() + "." + extension;
        cb(null, file.id);
    },
});

const upload = multer({
    storage: storage,
});

const uploadlogo = multer({
    storage: storagelogo,
});

router.post("/akunting_insert2", upload.single("upload_bukti"), akunting.insert_akunting);
router.post("/logoinsert", uploadlogo.single("upload_costum"), (req, res) => {
    res.send(req.file.filename);
});

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
    if (req.session.currentURL !== undefined && req.session.isLogin == true) {
        res.redirect(req.session.currentURL);
    } else {
        res.redirect("/");
    }
});

router.get("/logout_process", (req, res) => {
    req.session.currentURL = undefined;
    req.session.isLogin = false;
    req.session.destroy();
    res.redirect("/login");
});

router.get("/keranjang", (req, res) => {
    console.log("req.session.cart");
    //console.log(req.session.cart);
    res.render("keranjang.hbs");
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
        chasier_id: req.session.chasier_id,
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

router.get("/keranjang_add", (req, res) => {
    var cart = req.session.cart || [];

    cart.push({
        product_id: req.query.product_id,
        product_spec_id: req.query.product_spec_id,
        product_name: req.query.product_name,
        product_color: req.query.product_color,
        product_size: req.query.product_size,
        product_pic_logo: req.query.product_pic_logo,
        item_net_cost: req.query.item_net_cost,
        item_amount: req.query.item_amount,
        item_total_cost: parseInt(req.query.item_total_cost),
        paper_bucket: req.query.paper_bucket,
        logo_mentahan_f: req.query.logo_f,
        logo_mentahan_b: req.query.logo_b,
        p_height: req.query.p_height,
        p_width: req.query.p_width,
        checked: "true",
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

router.get("/keranjang_edit_checked", (req, res) => {
    var cart = req.session.cart;

    cart[req.query.key]["checked"] = req.query.checked;

    req.session.cart = cart;
    res.json(req.session.cart);
});

router.get("/keranjang_delete", (req, res) => {
    var cart_new = [];

    for (var i = 0; i < req.session.cart.length; i++) {
        if (i != req.query.id_del) {
            cart_new.push(req.session.cart[i]);
        }
    }

    req.session.cart = cart_new;
    res.json(req.session.cart);
});

router.get("/keranjang_keep_unchecked", (req, res) => {
    var cart_new = [];

    for (var i = 0; i < req.session.cart.length; i++) {
        if (req.session.cart[i].checked != "true") {
            cart_new.push(req.session.cart[i]);
        }
    }

    req.session.cart = cart_new;
    res.json(req.session.cart);
});

router.get("/keranjang_list", (req, res) => {
    res.json(req.session.cart);
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
router.get("/product_total_stok", product.select_total_stok);

router.get("/products_union", product.select_product_union);

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
router.post("/akunting_update", upload.single("upload_bukti2"), akunting.update_akunting);
router.post("/akunting_insert", akunting.insert_akunting);
router.post("/upload");

router.get("/product_kaos_select", product_kaos.select_kaos);
router.get("/product_kaos_select_warna", product_kaos.select_warna_kaos);
router.get("/product_kaos_select_price", product_kaos.select_price);
router.post("/product_kaos_select_size", product_kaos.select_size_kaos);
router.get("/product_kaos_delete/:idproductkaos", product_kaos.delete_kaos);
router.post("/product_kaos_update", product_kaos.update_kaos);
router.post("/product_kaos_insert", product_kaos.insert_kaos);
router.post("/product_kaos_update_amount", product_kaos.update_amount);

router.get("/product_sweater_select", product_sweater.select_sweater);
router.get("/product_sweater_select_warna", product_sweater.select_warna_sweater);
router.post("/product_sweater_select_size", product_sweater.select_size_sweater);
router.get("/product_sweater_delete/:idproductsweater", product_sweater.delete_sweater);
router.post("/product_sweater_update", product_sweater.update_sweater);
router.post("/product_sweater_insert", product_sweater.insert_sweater);
router.get("/product_sweater_select_price", product_sweater.select_price);
router.post("/product_sweater_update_amount", product_sweater.update_amount);

router.get("/product_tanktop_select", product_tanktop.select_tanktop);
router.get("/product_tanktop_select_warna", product_tanktop.select_warna_tanktop);
router.post("/product_tanktop_select_size", product_tanktop.select_size_tanktop);
router.get("/product_tanktop_delete/:idproducttanktop", product_tanktop.delete_tanktop);
router.post("/product_tanktop_update", product_tanktop.update_tanktop);
router.post("/product_tanktop_insert", product_tanktop.insert_tanktop);
router.get("/product_tanktop_select_price", product_tanktop.select_price);
router.post("/product_tanktop_update_amount", product_tanktop.update_amount);

router.get("/product_topi_select", product_topi.select_topi);
router.get("/product_topi_select_warna", product_topi.select_warna_topi);
router.post("/product_topi_select_size", product_topi.select_size_topi);
router.get("/product_topi_delete/:idproducttopi", product_topi.delete_topi);
router.post("/product_topi_update", product_topi.update_topi);
router.post("/product_topi_insert", product_topi.insert_topi);
router.get("/product_topi_select_price", product_topi.select_price);
router.post("/product_topi_update_amount", product_topi.update_amount);

router.get("/product_totebag_select", product_totebag.select_totebag);
router.get("/product_totebag_select_warna", product_totebag.select_warna_totebag);
router.post("/product_totebag_select_size", product_totebag.select_size_totebag);
router.get("/product_totebag_delete/:idproducttotebag", product_totebag.delete_totebag);
router.post("/product_totebag_update", product_totebag.update_totebag);
router.post("/product_totebag_insert", product_totebag.insert_totebag);
router.get("/product_totebag_select_price", product_totebag.select_price);
router.post("/product_totebag_update_amount", product_totebag.update_amount);

router.get("/product_polocap_select", product_polocap.select_polocap);
router.get("/product_polocap_select_warna", product_polocap.select_warna_polocap);
router.post("/product_polocap_select_size", product_polocap.select_size_polocap);
router.get("/product_polocap_delete/:idproductpolocap", product_polocap.delete_polocap);
router.post("/product_polocap_update", product_polocap.update_polocap);
router.post("/product_polocap_insert", product_polocap.insert_polocap);
router.get("/product_polocap_select_price", product_polocap.select_price);
router.post("/product_polocap_update_amount", product_polocap.update_amount);

router.get("/product_panelcap_select", product_panelcap.select_panelcap);
router.get("/product_panelcap_select_warna", product_panelcap.select_warna_panelcap);
router.post("/product_panelcap_select_size", product_panelcap.select_size_panelcap);
router.get("/product_panelcap_delete/:idproductpanelcap", product_panelcap.delete_panelcap);
router.post("/product_panelcap_update", product_panelcap.update_panelcap);
router.post("/product_panelcap_insert", product_panelcap.insert_panelcap);
router.get("/product_panelcap_select_price", product_panelcap.select_price);
router.post("/product_panelcap_update_amount", product_panelcap.update_amount);

router.get("/product_truckercap_select", product_truckercap.select_truckercap);
router.get("/product_truckercap_select_warna", product_truckercap.select_warna_truckercap);
router.post("/product_truckercap_select_size", product_truckercap.select_size_truckercap);
router.get("/product_truckercap_delete/:idproducttruckercap", product_truckercap.delete_truckercap);
router.post("/product_truckercap_update", product_truckercap.update_truckercap);
router.post("/product_truckercap_insert", product_truckercap.insert_truckercap);
router.get("/product_truckercap_select_price", product_truckercap.select_price);
router.post("/product_truckercap_update_amount", product_truckercap.update_amount);

router.get("/product_papper_select", product_papper.select_papper);
router.get("/product_papper_delete/:idproductpapper", product_papper.delete_papper);
router.post("/product_papper_update", product_papper.update_papper);
router.post("/product_papper_insert", product_papper.insert_papper);

router.get("/payments", payment.select_payment);

router.post("/transaction", transaction.insert_transaction);
router.get("/transactions", transaction.select_transaction);
router.get("/transaction/:idTransaction", transaction.select_transaction);
router.post("/transaction_item", transaction.insert_transaction_item);
router.get("/transaction_item", transaction.select_transaction_item);
router.get("/transaction_item/:idTransaction", transaction.select_transaction_item);
router.post("/transaction_item_paper", transaction.insert_transaction_item_paper);
router.get("/transaction_total", transaction.select_total_transaction);

module.exports = router;
