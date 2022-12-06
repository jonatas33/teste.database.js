const express = require("express"); //modulo express retorna uma função para a variavel
const app = express();
const {engine} = require('express-handlebars')//constante recebe o modulo express handlebars
const bodyParser = require('body-parser')//Capta/recebe dados do formulario
const Atividade = require('./models/Atv')
const Sequelize = require('sequelize')


//Template Engine //Existem muitos templates para o nodeJS
app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Body Parser - Configuração
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Rotas
app.get('/', function(req, res){
    res.render('home')
})

app.get('/cad', function(req, res){
    res.render('formulario')
})

//Enviar dados do formulário para o banco de dados
app.post('/add', function(req, res) {
    Atividade.create({
        equipe: req.body.equipe,
        atividade: req.body.atividade,
        lider: req.body.lider
    })
        .then(function() {
            //res.send("Atv criado com sucesso")
            res.redirect('/')
        })
        .catch(function(erro) {
            res.send("Houve um erro: " + erro)
        })   
    })
    app.listen(8090, function(){
        console.log("Servidor Rodando na url http:localhost:8090")
    });