var mysql = require("mysql");
const connect = require("../config/conn");

exports.login_process = function (req, res, next) {
    //var global.datax;
    var con = mysql.createPool({
        host: connect.host,
        user: connect.user,
        password: connect.password,
        database: connect.database,
        port: connect.port,
    });

    var user = req.body.username;
    var pass = req.body.userpass;

    //console.log(req.body.username + " " + req.body.userpass);

    con.query("SELECT * FROM chasiers WHERE username = ? AND password = ?", [user, pass], function (error, results, fields) {
        //console.log(error);

        //Regular Accounts
        if (results.length > 0) {
            req.session.isLogin = true;
            req.session.username = user;

            //console.log(rows);

            results.forEach(function (element) {
                req.session.chasier_id = element.idchasier;
                console.log(" element.idchasier " + element.idchasier);
            });

            next();
        } else {
            res.redirect("/login?passwrong=1");
        }
    });
};

exports.login_handle = function (req, res, next) {
    if (req.session.isLogin) {
        next();
    } else {
        res.redirect("/login");
    }
};
