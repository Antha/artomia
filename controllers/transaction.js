"use strict";
let transaction = require("../models/transaction");

exports.insert_transaction = function (req, res) {
    transaction.insert_transaction(function (status, data) {
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

exports.select_transaction = function (req, res) {
    transaction.select_transaction(function (status, data) {
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

exports.insert_transaction_item = function (req, res) {
    transaction.insert_transaction_item(function (status, data) {
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

exports.select_transaction_item = function (req, res) {
    transaction.select_transaction_item(function (status, data) {
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
