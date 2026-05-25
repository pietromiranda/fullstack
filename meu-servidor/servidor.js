const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('view engine', 'ejs');

let usuarios = [];


// HOME
app.get('/', (req, res) => {

    res.render('index');

});


// CADASTRO
app.post('/cadastro', (req, res) => {

    const nome = req.body.nome;

    usuarios.push(nome);

    res.redirect('/usuarios');

});


// LISTAGEM
app.get('/usuarios', (req, res) => {

    res.render('usuarios', {
        usuarios
    });

});


app.listen(3000, () => {

    console.log('Servidor rodando!');

});