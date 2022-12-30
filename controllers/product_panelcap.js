"use strict";
let product_panelcap = require("../models/product_panelcap");

exports.select_panelcap = function (req, res) {
    product_panelcap.select_panelcap(function (status, data) {
        var mydata = [];
        var myjson;
        var status;

        myjson = {
            status: status,
            data: data.rows,
        };
        //console.log(myjson);
        res.json(myjson);
        res.end();
    }, req);
};

exports.select_warna_panelcap = function (req, res) {
    product_panelcap.select_warna_panelcap(function (status, data) {
        var mydata = [];
        var myjson;
        var status;

        myjson = {
            status: status,
            data: data.rows,
        };
        //console.log(myjson);
        res.json(myjson);
        res.end();
    }, req);
};

exports.select_size_panelcap = function (req, res) {
    product_panelcap.select_size_panelcap(function (status, data) {
        var mydata = [];
        var myjson;
        var status;

        myjson = {
            status: status,
            data: data.rows,
        };
        //console.log(myjson);
        res.json(myjson);
        res.end();
    }, req);
};

exports.delete_panelcap = function (req, res) {
    product_panelcap.delete_panelcap(function (status, data) {
        var mydata = [];
        var myjson;
        var status;
        myjson = {
            status: status,
            data: data.rows,
        };
        //console.log(myjson);
        res.json(myjson);
        res.end();
    }, req);
};

exports.update_panelcap = function (req, res) {
    product_panelcap.update_panelcap(function (status, data) {
        var mydata = [];
        var myjson;
        var status;
        myjson = {
            status: status,
            data: data.rows,
        };
        //console.log(myjson);
        res.json(myjson);
        res.end();
    }, req);
};

exports.insert_panelcap = function (req, res) {
    product_panelcap.insert_panelcap(function (status, data) {
        var mydata = [];
        var myjson;
        var status;
        myjson = {
            status: status,
            data: data.rows,
        };
        //console.log(myjson);
        res.json(myjson);
        res.end();
    }, req);
};

exports.select_price = function (req, res) {
    product_panelcap.select_price(function (status, data) {
        var mydata = [];
        var myjson;
        var status;
        myjson = {
            status: status,
            data: data.rows,
        };
        //console.log(myjson);
        res.json(myjson);
        res.end();
    }, req);
};

exports.update_amount = function (req, res) {
    product_panelcap.update_amount(function (status, data) {
        var mydata = [];
        var myjson;
        var status;
        myjson = {
            status: status,
            data: data.rows,
        };
        //console.log(myjson);
        res.json(myjson);
        res.end();
    }, req);
};
