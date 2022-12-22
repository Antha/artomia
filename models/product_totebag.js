var mysql = require("mysql");
const connect = require("../config/conn");

function select_totebag(callback, req) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });

    con.getConnection(function (err, connection) {
        con.query(`
            SELECT * FROM \`product_totebag\`
        `, function (error, rows, fields) {
            if (error) {
                callback(error, {rows: rows, fields: fields});
            } else {
                callback("success", {rows: rows, fields: fields});
            }
            con.end();
        });
    });
}

function select_warna_totebag(callback, req) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });

    con.getConnection(function (err, connection) {
        con.query(`
            SELECT DISTINCT warna as warna ,kode FROM \`product_totebag\` where amount >=0;
        `, function (error, rows, fields) {
            if (error) {
                callback(error, {rows: rows, fields: fields});
            } else {
                callback("success", {rows: rows, fields: fields});
            }
            con.end();
        });
    });
}

function select_size_totebag(callback, req) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });

    var option = ``;
    if (req.body.warna) {
        option += ` WHERE warna = '${req.body.warna}' `;
    }

    con.getConnection(function (err, connection) {
        con.query(`
            SELECT size FROM \`product_totebag\` ${option} and amount >=0;;
        `, function (error, rows, fields) {
            if (error) {
                callback(error, {rows: rows, fields: fields});
            } else {
                callback("success", {rows: rows, fields: fields});
            }
            con.end();
        });
    });
}

function delete_totebag(callback, req) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });

    var option = ``;
    if (req.params.idproducttotebag) {
        option += ` WHERE idproducttotebag = '${req.params.idproducttotebag}' `;
    }

    con.getConnection(function (err, connection) {
        con.query(`DELETE FROM product_totebag ${option}`, function (error, rows, fields) {
            if (error) {
                callback(error, {rows: rows, fields: fields});
            } else {
                callback("success", {rows: rows, fields: fields});
            }
            con.end();
        });
    });
}

function update_totebag(callback, req) {
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
            `UPDATE product_totebag
            SET amount = amount+'${req.body.amount}'
            WHERE idproducttotebag = ${req.body.idproducttotebag}`,
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

function insert_totebag(callback, req) {
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
            `INSERT INTO product_totebag
            (kode, jenisbarang, size, amount, hargabeli, hargajual, warna)
            VALUES ('${req.body.kode}', '${req.body.jenisbarang}','${req.body.size}','${req.body.amount}','${req.body.hargabeli}','${req.body.hargajual}','${req.body.warna}')
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
module.exports.insert_totebag = insert_totebag;
module.exports.update_totebag = update_totebag;
module.exports.select_totebag = select_totebag;
module.exports.delete_totebag = delete_totebag;

module.exports.select_size_totebag = select_size_totebag;
module.exports.select_warna_totebag = select_warna_totebag;
