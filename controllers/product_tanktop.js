"use strict";
let product_tanktop = require("../models/product_tanktop");

exports.select_tanktop = function (req, res) {
    product_tanktop.select_tanktop(function (status, data) {
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

exports.select_warna_tanktop = function (req, res) {
    product_tanktop.select_warna_tanktop(function (status, data) {
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

exports.select_size_tanktop = function (req, res) {
    product_tanktop.select_size_tanktop(function (status, data) {
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

exports.delete_tanktop = function (req, res) {
    product_tanktop.delete_tanktop(function (status, data) {
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

exports.update_tanktop = function (req, res) {
    product_tanktop.update_tanktop(function (status, data) {
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

exports.insert_tanktop = function (req, res) {
    product_tanktop.insert_tanktop(function (status, data) {
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


