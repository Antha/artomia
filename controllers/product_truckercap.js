"use strict";
let product_truckercap = require("../models/product_truckercap");

exports.select_truckercap = function (req, res) {
    product_truckercap.select_truckercap(function (status, data) {
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

exports.select_warna_truckercap = function (req, res) {
    product_truckercap.select_warna_truckercap(function (status, data) {
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

exports.select_size_truckercap = function (req, res) {
    product_truckercap.select_size_truckercap(function (status, data) {
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

exports.delete_truckercap = function (req, res) {
    product_truckercap.delete_truckercap(function (status, data) {
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

exports.update_truckercap = function (req, res) {
    product_truckercap.update_truckercap(function (status, data) {
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

exports.insert_truckercap = function (req, res) {
    product_truckercap.insert_truckercap(function (status, data) {
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
    product_truckercap.select_price(function (status, data) {
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
    product_truckercap.update_amount(function (status, data) {
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
