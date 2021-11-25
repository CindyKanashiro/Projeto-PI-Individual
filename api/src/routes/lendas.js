var express = require("express");
var router = express.Router();
var multer = require("multer");
var path = require("path");
var lendasController = require("../controllers/lendasController");

var storage = multer.diskStorage({
    destination: function(req, imagem, callback) {
        callback(null, "uploads/")
    },
    filename: function(req, imagem, callback) {
       var arquivo = Date.now()+path.extname(imagem.originalname)
        callback(null, arquivo)
    }
})


var upload = multer({storage})

router.get("/", function (req, res) {
     lendasController.listar(req, res);
});

router.post("/cadastrar",upload.single("imagem"), function (req, res) {
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