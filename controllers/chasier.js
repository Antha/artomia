"use strict";
let chasier = require("../models/chasier");

exports.select_chasier = function (req, res) {
    chasier.select_chasier(function (status, data) {
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

exports.delete_chasier = function (req, res) {
    chasier.delete_chasier(function (status, data) {
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

exports.update_chasier = function (req, res) {
    chasier.update_chasier(function (status, data) {
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

exports.insert_chasier = function (req, res) {
    chasier.insert_chasier(function (status, data) {
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

