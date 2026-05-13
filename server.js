const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const db = new sqlite3.Database('./database.db');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/pages', express.static('pages'));


db.run(`
CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT,
    resumo TEXT,
    conteudo TEXT
)
`);


app.get('/', (req, res) => {
    res.redirect('/blog');
});


app.get('/blog', (req, res) => {

    db.all('SELECT * FROM posts', [], (err, rows) => {

        if (err) {
            console.log(err);
        }

        res.render('blog', {
            posts: rows
        });
    });
});


app.get('/cadastrar', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'cadastrar_post.html'));
});


app.post('/salvar-post', (req, res) => {

    const { titulo, resumo, conteudo } = req.body;

    db.run(
        `INSERT INTO posts (titulo, resumo, conteudo)
         VALUES (?, ?, ?)`,
        [titulo, resumo, conteudo],
        (err) => {

            if (err) {
                console.log(err);
            }

            res.redirect('/blog');
        }
    );
});


app.listen(80, () => {
    console.log('Servidor rodando na porta 80');
});