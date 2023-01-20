const req = require("express/lib/request");
var mysql = require("mysql");
const connect = require("../config/conn");

//table product
function insert_product(callback, req) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });

    con.getConnection(function (err, connection) {
        con.query(
            `INSERT INTO products(name,count_avail,idproduct_size,idproduct_color,idproduct_variant,idproduct_arm_length) VALUES (
                '${req.body.name}',
                '${req.body.count_avail}',
                '${req.body.idproduct_size}',
                '${req.body.idproduct_color}',
                '${req.body.idproduct_variant}',
                '${req.body.idproduct_arm_length}'
            ) 
            `,
            function (error, rows, fields) {
                if (error) {
                    callback(error, {rows: rows, fields: fields});
                } else {
                    callback("success", {rows: rows, fields: fields});
                }
                con.end();
            }
        );
    });
}

function select_product(callback, req) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });

    var option = "";

    if (req.params.id) {
        option = " AND idproducts = '" + req.params.id + "' ";
    }

    con.getConnection(function (err, connection) {
        con.query(`SELECT * FROM products WHERE 1 ${option} `, function (error, rows, fields) {
            if (error) {
                callback(error, {rows: rows, fields: fields});
            } else {
                callback("success", {rows: rows, fields: fields});
            }
            con.end();
        });
    });
}

// table product size
function select_all_product_size(callback) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });

    con.getConnection(function (err, connection) {
        con.query(`SELECT * FROM product_size`, function (error, rows, fields) {
            if (error) {
                callback(error, {rows: rows, fields: fields});
            } else {
                callback("success", {rows: rows, fields: fields});
            }
            con.end();
        });
    });
}

// table product color
function select_all_product_color(callback) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });

    con.getConnection(function (err, connection) {
        con.query(`SELECT * FROM product_color`, function (error, rows, fields) {
            if (error) {
                callback(error, {rows: rows, fields: fields});
            } else {
                callback("success", {rows: rows, fields: fields});
            }
            con.end();
        });
    });
}

// table product variant
function select_all_product_variant(callback) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });

    con.getConnection(function (err, connection) {
        con.query(`SELECT * FROM product_variant`, function (error, rows, fields) {
            if (error) {
                callback(error, {rows: rows, fields: fields});
            } else {
                callback("success", {rows: rows, fields: fields});
            }
            con.end();
        });
    });
}

// table product arm length
function select_all_product_arm_length(callback) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });

    con.getConnection(function (err, connection) {
        con.query(`SELECT * FROM product_arm_length`, function (error, rows, fields) {
            if (error) {
                callback(error, {rows: rows, fields: fields});
            } else {
                callback("success", {rows: rows, fields: fields});
            }
            con.end();
        });
    });
}

// table product arm length
function select_paper(callback, req) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });

    var options = "";

    if (req.query.lebar && req.query.tinggi) {
        options = ` AND WIDTH >= ${req.query.lebar} AND LENGTH >= ${req.query.tinggi} `;
    }

    con.getConnection(function (err, connection) {
        con.query(`SELECT * FROM paper WHERE 1 ` + options, function (error, rows, fields) {
            if (error) {
                callback(error, {rows: rows, fields: fields});
            } else {
                callback("success", {rows: rows, fields: fields});
            }
            con.end();
        });
    });
}

//
function select_total_stok(callback) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });

    con.getConnection(function (err, connection) {
        con.query(
            `SELECT
                SUM(amount) amount
                FROM
                (
                SELECT *,1 AS product_id,\`idproductkaos\` AS product_spec_id FROM \`product_kaos\`
                UNION
                SELECT *,8 AS product_id,\`idproductpanelcap\` AS product_spec_id  FROM \`product_panelcap\`
                UNION
                SELECT *,7 AS product_id,\`idproductpolocap\` AS product_spec_id  FROM \`product_polocap\`
                UNION
                SELECT *,2 AS product_id,\`idproductsweater\` AS product_spec_id  FROM \`product_sweater\`
                UNION
                SELECT *,4 AS product_id,\`idproducttanktop\` AS product_spec_id FROM \`product_tanktop\`
                UNION
                SELECT *,5 AS product_id,\`idproducttopi\` AS product_spec_id FROM \`product_topi\`
                UNION
                SELECT *,6 AS product_id,\`idproducttotebag\` AS product_spec_id FROM \`product_totebag\`
                UNION
                SELECT *,9 AS product_id,\`idproducttruckercap\` AS product_spec_id FROM \`product_truckercap\`
                ) AS DATA`,
            function (error, rows, fields) {
                if (error) {
                    callback(error, {rows: rows, fields: fields});
                } else {
                    callback("success", {rows: rows, fields: fields});
                }
                con.end();
            }
        );
    });
}

//
function select_product_union(callback) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });

    con.getConnection(function (err, connection) {
        con.query(
            ` 
                SELECT 
                *
                FROM \`products\` P
                JOIN
                (
                SELECT SUM(amount) amount,1 AS product_id FROM \`product_kaos\`
                UNION
                SELECT SUM(amount),8 AS product_id FROM \`product_panelcap\`
                UNION
                SELECT SUM(amount),7 AS product_id FROM \`product_polocap\`
                UNION
                SELECT SUM(amount),2 AS product_id FROM \`product_sweater\`
                UNION
                SELECT SUM(amount),4 AS product_id FROM \`product_tanktop\`
                UNION
                SELECT SUM(amount),5 AS product_id FROM \`product_topi\`
                UNION
                SELECT SUM(amount),6 AS product_id FROM \`product_totebag\`
                UNION
                SELECT SUM(amount),9 AS product_id FROM \`product_truckercap\`
                ) AS J
                ON
                P.\`idproducts\` = J.product_id
           `,
            function (error, rows, fields) {
                if (error) {
                    callback(error, {rows: rows, fields: fields});
                } else {
                    callback("success", {rows: rows, fields: fields});
                }
                con.end();
            }
        );
    });
}

module.exports.insert_product = insert_product;
module.exports.select_product = select_product;
module.exports.select_all_product_size = select_all_product_size;
module.exports.select_all_product_color = select_all_product_color;
module.exports.select_all_product_variant = select_all_product_variant;
module.exports.select_all_product_arm_length = select_all_product_arm_length;
module.exports.select_paper = select_paper;
module.exports.select_total_stok = select_total_stok;
module.exports.select_product_union = select_product_union;
