const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// PORTA 80
const PORT = 80;

// configuração EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(bodyParser.urlencoded({ extended: true }));

// css
app.use(express.static(path.join(__dirname, 'public')));

// páginas html
app.use(express.static(path.join(__dirname, 'pages')));


// rota principal -> Projects.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'Projects.html'));
});

// cadastro
app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'Cadastro.html'));
});

// login
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'Login.html'));
});

// POST login
app.post('/login', (req, res) => {

    const usuario = req.body.usuario;
    const senha = req.body.senha;

    let status = '';

    if(usuario === 'admin' && senha === '123') {
        status = 'LOGIN REALIZADO COM SUCESSO';
    } else {
        status = 'LOGIN INVÁLIDO';
    }

    res.render('resposta', {
        usuario,
        status
    });
});

// servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});