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
        con.query(
            `
            Select z.*,i.jenisbarang,i.size from 
            (SELECT distinct(a.idtransaction_item) as idtransactionitem , a.pic,a.piclogo_f AS piclogo,a.product_id,a.product_spec_id, d.fullname as pelanggan , e.name as kasir , DATE_FORMAT(c.datetime,'%Y-%m-%d %H:%i:%s') datetime, CASE WHEN a.status IS Null THEN "progress" ELSE a.status end as status , a.deskripsi, c.idtransaction
            from transaction_item a
            Left JOIN transactions c
            ON a.transaction_id = c.idtransaction
            left join customers d
            ON c.customer_id = d.id
            left join chasiers e
            ON c.chasier_id = e.idchasier
            left join transaction_item_paper g
            ON a.idtransaction_item = g.transaction_item_id
            left join paper h
            ON g.paper_id = h.idpaper)Z
            left join (
                Select *, '1' AS product_id from product_kaos
                Union 
                Select *, '2' as product_id from product_sweater
                union
                Select *, '4' AS product_id from product_tanktop
                Union 
                Select *, '5' as product_id from product_topi
                Union 
                Select *, '6' as product_id from product_totebag
                union
                Select *, '7' as product_id from product_polocap
                Union 
                Select *, '8' AS product_id from product_panelcap
                Union 
                Select *, '9' as product_id from product_truckercap
            )i
            ON Z.product_id = i.product_id and Z.product_spec_id = i.idproductkaos
            order by datetime DESC
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
