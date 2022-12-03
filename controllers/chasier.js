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
