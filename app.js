const express = require("express")
const app = express();
// utilizar js no html
const handlebars = require("express-handlebars")

// Receber conteudo de formularios
const bodyParser = require("body-parser");
// Recebendo objeto usuario do models
const Usuario = require('./models/Pessoa')




//Config
//Template Engine
    app.engine('handlebars',handlebars({defaultLayout:'main'}))
    app.set('view-engine','handlebars')

 //Body Parser config
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())   


// ROTAS
    app.get('/cadastro',function(req,res){
        res.render('layouts/formularios.handlebars')
    })
    app.post("/add",function(req,res){
        Usuario.create({
            nome: req.body.nome,
            senha: req.body.senha
        }).then(function(){
            res.send('Formulario enviado com sucesso')
        }).catch(function(){
            res.send('Fale com o Suporte')
        })

    })

    app.get('/',function(req,res){
        Usuario.findAll().then(function(usuarios){
            res.render('layouts/home.handlebars',{usuarios : usuarios})

        })

    })




app.listen("8080",function(){
    console.log("Servidor rodando na porta http://localhost:8080")
})