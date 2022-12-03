"use strict";
let payment = require("../models/payment");

exports.select_payment = function (req, res) {
    payment.select_payment(function (status, data) {
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
