const express = require('express');
const app = express();
const faker = require('faker');/**usados na criacao de nomes aleatorios */
const mysql = require('mysql');
const port = process.env.APP_PORT || 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
}

const connection = mysql.createConnection(config);

app.get('/', (req, res) => {
  const people_nome = faker.name.findName()
  const queryInsert = `INSERT INTO people (people_nome) VALUES ('${people_nome}')`;

  connection.query(queryInsert);

  connection.query(`SELECT people_nome FROM people`, (error, results, fields) => {
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ol>
        ${!!results.length ? results.map(people => `<li>${people.people_nome}</li>`).join('') : ''}
      </ol>
    `)
  });
})

app.listen(port, () => {
  console.log('Server is running on:', port);
});