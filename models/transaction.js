var mysql = require("mysql");
const connect = require("../config/conn");

function insert_transaction(callback, req) {
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
            `INSERT INTO transactions(customer_id,chasier_id,customer_priority_id,payment_id,datetime) VALUES (
                '${req.body.customers_id}',
                '${req.body.chasier_id}',
                '${req.body.customer_priority_id}',
                '${req.body.payment_id}',
                NOW()
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

function select_transaction(callback, req) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });

    var option = ``;
    if (req.params.idTransaction) {
        option += ` and t.idtransaction = '${req.params.idTransaction}' `;
    }

    con.getConnection(function (err, connection) {
        con.query(
            ` 
            SELECT
            \`idtransaction\`,
            c.\`fullname\`,
            DATE_FORMAT(t.datetime,'%Y-%m-%d %H:%i:%s') datetime,
            c.address,
            c.phone,
            ch.name chasier_name,
            cp.name priority,
            p.group payment,
            tc.total_cost
            FROM 
            \`transactions\` t
            JOIN \`customers\` c
            ON t.customer_id = c.id
            JOIN
            \`chasiers\` ch
            ON t.\`chasier_id\` = ch.\`idchasier\`
            JOIN 
            \`customer_priority\` cp
            ON
            t.\`customer_priority_id\` = cp.\`idcustomer_priority\`
            JOIN
            \`payments\` p
            ON
            t.\`payment_id\` = p.\`idpayment\`
            JOIN
            (
                SELECT transaction_id, SUM(amount * p.price ) total_cost FROM \`transaction_item\` t join \`products\` p on t.\`product_color_id\` = p.\`idproducts\`
                GROUP BY \`transaction_id\`
            ) tc
            on
            t.\`idtransaction\` = tc.\`transaction_id\`
            where 1 ${option}
            order by \`idtransaction\` desc
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

function insert_transaction_item(callback, req) {
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
            `INSERT INTO transaction_item(product_id,product_color_id,product_size_id,transaction_id,amount) VALUES (
                '${req.body.product_id}',
                '${req.body.product_color_id}',
                '${req.body.product_size_id}',
                '${req.body.transaction_id}',
                '${req.body.amount}'
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

function select_transaction_item(callback, req) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });

    var option = ``;
    if (req.params.idTransaction) {
        option += ` and transaction_id = '${req.params.idTransaction}' `;
    }

    con.getConnection(function (err, connection) {
        con.getConnection(function (err, connection) {
            con.query(
                `select 
                T.\`idtransaction_item\`,
                P.name product_name,
                PC.name color,
                PZ.name size,
                \`transaction_id\`,
                \`amount\`
                from 
                \`transaction_item\` T 
                JOIN \`products\` P
                ON T.product_id = P.\`idproducts\`
                JOIN
                \`product_color\` PC
                ON T.product_color_id = PC.\`idproduct_color\`
                JOIN
                \`product_size\` PZ
                ON T.product_size_id = PZ.\`idproduct_size\`
                ${option}
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
    });
}

module.exports.insert_transaction = insert_transaction;
module.exports.select_transaction = select_transaction;
module.exports.insert_transaction_item = insert_transaction_item;
module.exports.select_transaction_item = select_transaction_item;
