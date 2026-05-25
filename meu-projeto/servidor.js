const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/cadastro', (req, res) => {

    const nome = req.body.nome;

    console.log(nome);

    res.send(`
        <h1>Usuário cadastrado!</h1>
        <p>Nome: ${nome}</p>
    `);

});

app.listen(3000, () => {
    console.log('Servidor rodando!');
});