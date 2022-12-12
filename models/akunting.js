var mysql = require("mysql");
const connect = require("../config/conn");

function select_akunting(callback, req) {
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
            SELECT a.idaccounting as id ,  DATE_FORMAT(a.date,'%Y-%m-%d') date, a.nominal, a.description, b.name as accountingcategory , c.name as accountingmethod
            FROM 
            accounting a
            left join
            accounting_category b
            on a.accounting_category_id = b.idaccounting_category
            left join
            accounting_method c
            on a.accounting_method_id = c.idaccounting_method
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

function select_akunting_debit(callback, req) {
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
            select SUM(nominal)as debit from accounting where accounting_method_id = 1
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

function select_akunting_credit(callback, req) {
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
            select SUM(nominal)as kredit from accounting where accounting_method_id = 2
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

function delete_akunting(callback, req) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });

    var option = ``;
    if (req.params.idakunting) {
        option += ` WHERE idaccounting = '${req.params.idakunting}' `;
    }

    con.getConnection(function (err, connection) {
        con.query(`DELETE FROM accounting ${option}`, function (error, rows, fields) {
            if (error) {
                callback(error, {rows: rows, fields: fields});
            } else {
                callback("success", {rows: rows, fields: fields});
            }
            con.end();
        });
    });
}

function update_akunting(callback, req) {
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
            `UPDATE accounting
            SET nominal = '${req.body.nominal}', description = '${req.body.description}'
            WHERE idaccounting = ${req.body.idaccounting}`,
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

function insert_akunting(callback, req) {
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
            `INSERT INTO accounting
            (date, nominal, description, accounting_method_id, accounting_category_id)
            VALUES ('${req.body.date}', '${req.body.nominal}','${req.body.description}','${req.body.method}','${req.body.category}')
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
module.exports.insert_akunting = insert_akunting;
module.exports.update_akunting = update_akunting;
module.exports.select_akunting = select_akunting;
module.exports.select_akunting_debit = select_akunting_debit;
module.exports.select_akunting_credit = select_akunting_credit;
module.exports.delete_akunting = delete_akunting;