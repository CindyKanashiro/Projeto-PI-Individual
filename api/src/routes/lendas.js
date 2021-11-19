var express = require("express");
var router = express.Router();

var lendasController = require("../controllers/lendasController");

router.get("/", function (req, res) {
     lendasController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    lendasController.cadastrar(req, res);
})

module.exports = router;