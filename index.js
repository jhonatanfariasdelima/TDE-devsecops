const express = require("express");
const session = require("express-session");
const app = express();
const bodyParser = require("body-parser");
//const connection = require("./database/database");
//const loginModel = require("./database/Login");

//session
app.use(session({
    secret: "asd", cookie: {maxAge: 300000}
}));


// //Database
// connection
//     .authenticate()
//     .then(() => {
//         //console.log("Conexão feita com o banco de dados!")
//     })
//     .catch((msgErro) => {
//         console.log(msgErro);
//     })


app.set("view engine", "ejs");

// Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//ROTAS
app.get("/",(req, res) => {
    res.render("index");
});

app.post("/login",(req, res) => {
    var user = req.body.username;
    var password = req.body.password;


    // loginModel.findOne({
    //     where: {user: user}
    // }).then(login => {

        if(user == "admin"){
            if(password == "admin"){
                req.session.user = {
                    user: user
                }
                res.redirect("/home");
            }else{
                
                res.send("Login ou senha não encontrado");
            }
        }else{
            
            res.status(403).send("Login ou senha não encontrado");
        }
    // });
});

app.get("/home",(req, res) => {
    var nome = req.session.user.user;
    res.render("home",{
        nome: nome
    });
})

module.exports = app;

app.listen(8888, ()=>{console.log("App rodando!")});


