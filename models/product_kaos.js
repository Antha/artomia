var mysql = require("mysql");
const connect = require("../config/conn");

function select_kaos(callback, req) {
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
            SELECT * FROM \`product_kaos\`
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

function select_warna_kaos(callback, req) {
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
            SELECT DISTINCT warna as warna ,kode FROM \`product_kaos\` where amount >=0;
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

function select_size_kaos(callback, req) {
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
            SELECT size FROM \`product_kaos\` ${option} and amount >=0;;
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

function delete_kaos(callback, req) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });

    var option = ``;
    if (req.params.idproductkaos) {
        option += ` WHERE idproductkaos = '${req.params.idproductkaos}' `;
    }

    con.getConnection(function (err, connection) {
        con.query(`DELETE FROM product_kaos ${option}`, function (error, rows, fields) {
            if (error) {
                callback(error, {rows: rows, fields: fields});
            } else {
                callback("success", {rows: rows, fields: fields});
            }
            con.end();
        });
    });
}

function update_kaos(callback, req) {
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
            `UPDATE product_kaos
            SET amount = amount+'${req.body.amount}'
            WHERE idproductkaos = ${req.body.idproductkaos}`,
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

function insert_kaos(callback, req) {
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
            `INSERT INTO product_kaos
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
module.exports.insert_kaos = insert_kaos;
module.exports.update_kaos = update_kaos;
module.exports.select_kaos = select_kaos;
module.exports.delete_kaos = delete_kaos;

module.exports.select_size_kaos = select_size_kaos;
module.exports.select_warna_kaos = select_warna_kaos;
