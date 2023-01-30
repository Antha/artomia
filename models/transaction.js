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
                SELECT \`idtransaction\`, 
                c.\`fullname\`, 
                DATE_FORMAT(t.datetime, '%Y-%m-%d %H:%i:%s') datetime, 
                c.address, 
                c.phone, 
                ch.name chasier_name, 
                cp.name priority, 
                p.group payment, 
                tc.total_cost 
                FROM 
                \`transactions\` t 
                JOIN \`customers\` c ON t.customer_id = c.id JOIN \`chasiers\` ch ON t.\`chasier_id\` = ch.\`idchasier\`  
                JOIN  \`customer_priority\` cp ON t.\`customer_priority_id\` = cp.\`idcustomer_priority\`  JOIN \`payments\` p ON t.\`payment_id\` = p.\`idpayment\`  
                JOIN (

                    SELECT 
                    transaction_id, 
                    SUM(t.amount * p.hargajual) total_cost 
                    FROM 
                    \`transaction_item\` t 
                    join \`product_kaos\` p on t.\`product_spec_id\` = p.\`idproductkaos\` 
                    GROUP BY 
                    \`transaction_id\` 
                ) tc on t.\`idtransaction\` = tc.\`transaction_id\`  
                where 1 ${option} 
                order by 
                \`idtransaction\` desc

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

function select_growth_transaction_plus(callback, req) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });

    var option = ``;

    con.getConnection(function (err, connection) {
        con.query(
            ` 
                SELECT
                *,
                ROUND((T_CURRENT/T_BEFORE - 1) * 100,2) GROWTH
                
                FROM
                (
                    SELECT
                    COUNT(CASE WHEN DATE(DATETIME) = (SELECT DATE(MAX(DATETIME)) FROM \`transactions\` ) THEN 1 END) AS T_COUNT_CURRENT,
                    SUM(CASE WHEN DATE(DATETIME) = (SELECT DATE(MAX(DATETIME)) FROM \`transactions\` ) THEN total_price END) AS T_CURRENT,
                    SUM(CASE WHEN DATE(DATETIME) = (SELECT DISTINCT DATE(DATETIME) FROM \`transactions\` ORDER BY DATE(DATETIME) DESC LIMIT 1 OFFSET 1 ) THEN total_price END) AS T_BEFORE
                    FROM
                    (
                        SELECT 
                        \`transaction_id\`,
                        T.\`amount\`,
                        p.hargajual,
                        T.\`amount\` * p.hargajual total_price,
                        TS.datetime
                        FROM 
                        \`transaction_item\` T 
                        JOIN 
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
                        )P
                        ON 
                        T.product_spec_id = P.\`product_spec_id\`
                        AND                
                        T.product_id = P.\`product_id\`
                        JOIN
                        \`transactions\` TS
                        ON 
                        T.\`transaction_id\` = TS.\`idtransaction\`
                    ) AS MASTER
                ) AS CALC_1
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
            `INSERT INTO transaction_item(product_id,product_spec_id,transaction_id,amount,pic_f,pic_b,piclogo_f,piclogo_b,p_height,p_width) VALUES (
                '${req.body.product_id}',
                '${req.body.product_spec_id}',
                '${req.body.transaction_id}',
                '${req.body.amount}',
                '${req.body.pic_f}',
                '${req.body.pic_b}',
                '${req.body.logo_f}',
                '${req.body.logo_b}',
                '${req.body.height}',
                '${req.body.width}'
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
                `
                SELECT 
                    T.\`idtransaction_item\`,
                    P.jenisbarang product_name,
                    P.warna color,
                    P.size size,
                    \`transaction_id\`,
                    T.\`amount\`
                    FROM 
                    \`transaction_item\` T 
                    JOIN 
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
                    )P
                    ON 
                    T.product_spec_id = P.\`product_spec_id\`
                    AND                
                    T.product_id = P.\`product_id\`
                    where 1 ${option}
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

function insert_transaction_item_paper(callback, req) {
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
            `INSERT INTO transaction_item_paper(paper_id,transaction_item_id,amount) VALUES (
                '${req.body.paper_id}',
                '${req.body.transaction_item_id}',
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

function select_price(callback, req) {
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
            SELECT idproducttotebag product_id_spec,hargajual price FROM \`product_totebag\`
            WHERE size = '${req.query.size}' and warna = '${req.query.warna}'
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

function update_amount(callback, req) {
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
            SET amount = amount-'${req.body.amount}'
            WHERE size = '${req.body.size}' and warna = '${req.body.warna}' `,
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

function select_total_transaction(callback, req) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });

    con.getConnection(function (err, connection) {
        con.query(` SELECT count(*) _count FROM transactions`, function (error, rows, fields) {
            if (error) {
                callback(error, {rows: rows, fields: fields});
            } else {
                callback("success", {rows: rows, fields: fields});
            }
            con.end();
        });
    });
}

module.exports.insert_transaction = insert_transaction;
module.exports.select_transaction = select_transaction;
module.exports.select_growth_transaction_plus = select_growth_transaction_plus;
module.exports.insert_transaction_item = insert_transaction_item;
module.exports.select_transaction_item = select_transaction_item;
module.exports.insert_transaction_item_paper = insert_transaction_item_paper;
module.exports.select_price = select_price;
module.exports.update_amount = update_amount;
module.exports.select_total_transaction = select_total_transaction;
