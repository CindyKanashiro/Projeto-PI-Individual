// routes = caminho onde irá enviar ou receber algo

var express = require("express");
var router = express.Router();
var multer = require("multer"); // multer= é responsavel pelo upload de arquivo / multer é um middleware antes de entrar na routes
var path = require("path"); // path serve para pegar o caminho/informações do arquivo
var lendasController = require("../controllers/lendasController");

// criando configuração
var storage = multer.diskStorage({ // salvando função dentro da variavel
    destination: function(req, imagem, callback) {// onde será salvo
        callback(null, "uploads/") // callback função de retorno
    },
    filename: function(req, imagem, callback) { // nome do arquivo que será salvo
       var arquivo = Date.now()+path.extname(imagem.originalname)
        callback(null, arquivo) 
    }
})


var upload = multer({storage}) // setando configurações do multer

c
router.get("/", function (req, res) {
     lendasController.listar(req, res);
});

// adicionando multer para fazer om upload
router.post("/cadastrar",upload.single("imagem"), function (req, res) { 
    lendasController.cadastrar(req, res);
})

router.delete("/deletar/:id", function (req, res) {
    lendasController.deletar(req, res);
})

// carregando os dados do formulário
router.get("/mostrar/:id", function (req, res) {
    lendasController.mostrar(req, res);
});

// adicionando multer para fazer om upload
router.put("/atualizar/:id",upload.single("imagem"), function (req, res) {
    lendasController.atualizar(req, res);
});

module.exports = router;