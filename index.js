const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let lanches = [
    {
        "id": 1,
        "nome": "calzone",
        "preco": "10"
    }
];

let clientes = [
    {
        "id": 1,
        "nome": "Roberto"
    }
]


app.post('/lanches', (req, res) => {
  const { nome, preco } = req.body;
  lanches.push({ nome, preco });
  res.json(lanches);
});


app.get('/lanches', (req, res) => {
  res.json(lanches);
});

app.delete('/lanches', (req, res) => {
  lanches = [];
  res.json({ message: 'Mensagens apagadas' });
});


app.listen(3001, () => {
console.log('Servidor rodando em http://localhost:3001');
});