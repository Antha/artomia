var mysql = require("mysql");
const connect = require("../config/conn");

function select_produksi(callback, req) {
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
            SELECT distinct(a.idtransaction_item) as idtransactionitem , a.pic, d.fullname as pelanggan , e.name as kasir , DATE_FORMAT(c.datetime,'%Y-%m-%d %H:%i:%s') datetime, f.name as ukuran, a.status , a.deskripsi, c.idtransaction
            from transaction_item a
            Left JOIN transactions c
            ON a.transaction_id = c.idtransaction
            left join customers d
            ON c.customer_id = d.id
            left join chasiers e
            ON c.chasier_id = e.idchasier
            left join product_size f
            ON a.product_size_id = f.idproduct_size
            left join transaction_item_paper g
            ON a.idtransaction_item = g.transaction_item_id
            left join paper h
            ON g.paper_id = h.idpaper
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

function delete_produksi(callback, req) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });

    var option = ``;
    if (req.params.idproduksi) {
        option += ` WHERE idtransaction_item = '${req.params.idproduksi}' `;
    }

    con.getConnection(function (err, connection) {
        con.query(`DELETE FROM transaction_item ${option}`, function (error, rows, fields) {
            if (error) {
                callback(error, {rows: rows, fields: fields});
            } else {
                callback("success", {rows: rows, fields: fields});
            }
            con.end();
        });
    });
}

function update_produksi(callback, req) {
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
            `UPDATE transaction_item
            SET status = '${req.body.status}', deskripsi = '${req.body.deskripsi}'
            WHERE idtransaction_item = ${req.body.idtransactionitem}`,
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

module.exports.update_produksi = update_produksi;
module.exports.select_produksi = select_produksi;
module.exports.delete_produksi = delete_produksi;