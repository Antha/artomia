"use strict";
let product_totebag = require("../models/product_totebag");

exports.select_totebag = function (req, res) {
    product_totebag.select_totebag(function (status, data) {
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

exports.select_warna_totebag = function (req, res) {
    product_totebag.select_warna_totebag(function (status, data) {
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

exports.select_size_totebag = function (req, res) {
    product_totebag.select_size_totebag(function (status, data) {
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

exports.delete_totebag = function (req, res) {
    product_totebag.delete_totebag(function (status, data) {
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

exports.update_totebag = function (req, res) {
    product_totebag.update_totebag(function (status, data) {
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

exports.insert_totebag = function (req, res) {
    product_totebag.insert_totebag(function (status, data) {
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


