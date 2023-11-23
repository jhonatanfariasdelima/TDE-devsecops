const express = require("express");
const session = require("express-session");
const app = express();
const bodyParser = require("body-parser");


//session
app.use(session({
    secret: "asd", cookie: {maxAge: 300000}
}));


app.set("view engine", "ejs");

// Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//ROTAS
app.get("/",(req, res) => {
    res.render("index");
});


module.exports = app;

app.listen(8888, ()=>{console.log("App rodando!")});


