const express = require("express");
var cors = require("cors");

const path = require("path");
const app = express();
const web = require("./routes/web.js");
const hbs = require("hbs");
const session = require("express-session");

//Set
hbs.registerPartials("./views/partials");

app.use(
    session({
        secret: "secret",
        resave: false,
        secure: true,
        saveUninitialized: true,
        cookie: {maxAge: 60000000000},
    })
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("./public"));

app.use("/", web);

app.listen(1690, () => {
    console.log("serving on port 1690");
});
