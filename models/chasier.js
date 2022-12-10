var mysql = require("mysql");
const connect = require("../config/conn");

function select_chasier(callback, req) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });

    con.getConnection(function (err, connection) {
        con.query(`SELECT * FROM chasiers`, function (error, rows, fields) {
            if (error) {
                callback(error, {rows: rows, fields: fields});
            } else {
                callback("success", {rows: rows, fields: fields});
            }
            con.end();
        });
    });
}

function delete_chasier(callback, req) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });

    var option = ``;
    if (req.params.idchasier) {
        option += ` WHERE idchasier = '${req.params.idchasier}' `;
    }

    con.getConnection(function (err, connection) {
        con.query(`DELETE FROM chasiers ${option}`, function (error, rows, fields) {
            if (error) {
                callback(error, {rows: rows, fields: fields});
            } else {
                callback("success", {rows: rows, fields: fields});
            }
            con.end();
        });
    });
}

function update_chasier(callback, req) {
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
            `UPDATE \`chasiers\`  
            SET \`name\` = '${req.body.nameuser}',\`username\` = '${req.body.usernameuser}',\`alamat\` = '${req.body.alamatuser}',\`category\` = '${req.body.categoryuser}'
            WHERE \`idchasier\` =${req.body.cashierid}`,
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

function insert_chasier(callback, req) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });
    
    con.getConnection(function (err, connection) {
        con.query(`INSERT INTO chasiers (\`name\`, \`username\`,\`password\`,\`alamat\`,\`category\`,\`email\`)
                VALUES ('${req.body.nameuser}', '${req.body.usernameuser}',
                '${req.body.passworduser}','${req.body.alamatuser}','${req.body.categoryuser}','${req.body.emailuser}')`,
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

module.exports.select_chasier = select_chasier;
module.exports.delete_chasier = delete_chasier;
module.exports.update_chasier = update_chasier;
module.exports.insert_chasier = insert_chasier;