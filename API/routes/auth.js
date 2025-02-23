const express = require('express');
const router = express.Router();
const db = require('../db');

// Rota para registrar um novo usuário
router.post('/register', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send('Por favor, preencha todos os campos');
  }
  const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
  db.query(query, [email, password], (err, result) => {
    if (err) {
      return res.status(500).send('Erro ao registrar o usuário');
    }
    res.status(201).send('Usuário registrado com sucesso');
  });
});

// Rota para login do usuário
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send('Por favor, preencha todos os campos');
  }
  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      return res.status(500).send('Erro ao fazer login');
    }
    if (results.length > 0) {
      res.status(200).send('Login bem-sucedido');
    } else {
      res.status(401).send('Credenciais inválidas');
    }
  });
});

module.exports = router;
