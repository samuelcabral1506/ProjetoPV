const mysql = require('mysql');

// Configuração da conexão com o banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'IncriçõesPV',
  password: 'PalavradavidaWendellKelstonSamuel69969',
  database: 'inscricaopv'
});

// Conectar ao banco de dados
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado ao banco de dados MySQL');
});

module.exports = db;
