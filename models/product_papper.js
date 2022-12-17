var mysql = require("mysql");
const connect = require("../config/conn");

function select_papper(callback, req) {
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
            SELECT * FROM \`paper\`
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

function delete_papper(callback, req) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });

    var option = ``;
    if (req.params.idproductpapper) {
        option += ` WHERE idpaper = '${req.params.idproductpapper}' `;
    }

    con.getConnection(function (err, connection) {
        con.query(`DELETE FROM paper ${option}`, function (error, rows, fields) {
            if (error) {
                callback(error, {rows: rows, fields: fields});
            } else {
                callback("success", {rows: rows, fields: fields});
            }
            con.end();
        });
    });
}

function update_papper(callback, req) {
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
            `UPDATE paper
            SET amount = amount+'${req.body.amount}'
            WHERE idpaper = ${req.body.idpaper}`,
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

function insert_papper(callback, req) {
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
            `INSERT INTO paper
            (name, price, length, width, idpaper_category, amount, jenis)
            VALUES ('${req.body.name}', '${req.body.price}','${req.body.length}','${req.body.width}','${req.body.idpapper_category}','${req.body.amount}','${req.body.jenis}')
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
module.exports.insert_papper = insert_papper;
module.exports.update_papper = update_papper;
module.exports.select_papper = select_papper;
module.exports.delete_papper = delete_papper;