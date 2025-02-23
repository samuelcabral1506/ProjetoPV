const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const authRoutes = require('./routes/auth');

const app = express();
const port = 3000;

// Middleware para analisar o corpo da requisição
app.use(bodyParser.json());

// Rotas de autenticação
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
