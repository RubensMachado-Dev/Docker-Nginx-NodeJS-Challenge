
const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql =require('mysql')
const connection = mysql.createConnection(config)

const sql = 'INSERT INTO people(name) values ("RubensMachado-Dev")'

connection.query(sql)

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req, res) {
    var sql='SELECT name FROM people'
    connection.query(sql, function (err, data, fields) {
    if (err) throw err
    res.render('index.ejs', {people: data})
    connection.end
  });
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})