var express = require('express');
var router = express.Router();

var usuarioController = require('../controllers/usuarioController');

// função de listagem
router.get('/', function (req, res) {
  usuarioController.listar(req, res);
});

router.post('/cadastrar', function (req, res) {
  usuarioController.cadastrar(req, res);
});

router.post('/autenticar', function (req, res) {
  usuarioController.entrar(req, res);
});

router.delete('/deletar/:id', function (req, res) {
  usuarioController.deletar(req, res);
});

// carregando os dados do formulário
router.get('/mostrar/:id', function (req, res) {
  usuarioController.mostrar(req, res);
});

router.put('/atualizar/:id', function (req, res) {
  usuarioController.atualizar(req, res);
});

module.exports = router;
