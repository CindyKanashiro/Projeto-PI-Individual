var express = require("express");
var router = express.Router();

var lendasController = require("../controllers/lendasController");

router.get("/", function (req, res) {
     lendasController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    lendasController.cadastrar(req, res);
})

router.delete("/deletar/:id", function (req, res) {
    lendasController.deletar(req, res);
})

router.get("/mostrar/:id", function (req, res) {
    lendasController.mostrar(req, res);
});

router.put("/atualizar/:id", function (req, res) {
    lendasController.atualizar(req, res);
});

module.exports = router;