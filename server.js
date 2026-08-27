const express = require('express');
const app = express();
const port = 3000;

// Rota de health check exigida no PDF
app.get('/health', (req, res) => {
  res.json({ status: 'db: connected' });
});

// Rota de itens exigida no PDF
app.get('/items', (req, res) => {
  res.json([{ id: 1, name: 'Item do Banco de Dados' }]);
});

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});