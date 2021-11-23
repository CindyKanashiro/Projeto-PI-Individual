var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
     usuarioController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.delete("/deletar/:id", function (req, res) {
    usuarioController.deletar(req, res);
})

router.get("/mostrar", function (req, res) {
    usuarioController.mostrar(req, res);
});

module.exports = router;