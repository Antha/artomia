var mysql = require("mysql");
const connect = require("../config/conn");

function select_topi(callback, req) {
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
            SELECT * FROM \`product_topi\`
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

function select_warna_topi(callback, req) {
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
            SELECT DISTINCT warna as warna ,kode FROM \`product_topi\` where amount >=0;
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

function select_size_topi(callback, req) {
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
            SELECT size FROM \`product_topi\` ${option} and amount >=0;;
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

function delete_topi(callback, req) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });

    var option = ``;
    if (req.params.idproducttopi) {
        option += ` WHERE idproducttopi = '${req.params.idproducttopi}' `;
    }

    con.getConnection(function (err, connection) {
        con.query(`DELETE FROM product_topi ${option}`, function (error, rows, fields) {
            if (error) {
                callback(error, {rows: rows, fields: fields});
            } else {
                callback("success", {rows: rows, fields: fields});
            }
            con.end();
        });
    });
}

function update_topi(callback, req) {
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
            `UPDATE product_topi
            SET amount = amount+'${req.body.amount}'
            WHERE idproducttopi = ${req.body.idproducttopi}`,
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

function insert_topi(callback, req) {
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
            `INSERT INTO product_topi
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
module.exports.insert_topi = insert_topi;
module.exports.update_topi = update_topi;
module.exports.select_topi = select_topi;
module.exports.delete_topi = delete_topi;

module.exports.select_size_topi = select_size_topi;
module.exports.select_warna_topi = select_warna_topi;
