var lendasModel = require("../models/lendasModel");

var sessoes = [];

function listar(req, res) {

    lendasModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function cadastrar(req, res) {
    var nome = req.body.nome;
    var conteudo = req.body.conteudo;
    var imagem = req.file.filename;
    var fk_usuario = req.body.fk_usuario;

    if (nome == '') {
        res.status(400).send("Nome da Lenda não está definida!");
    } else if (conteudo == '') {
        res.status(400).send("Conteúdo não definido!");
    } else {
        lendasModel.cadastrar(nome, conteudo, imagem, fk_usuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function deletar(req, res) {
    lendasModel.deletar(req.params.id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a exclusão! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

// mostrar a lista
function mostrar(req, res) {
    lendasModel.mostrar(req.params.id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar a consulta! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function atualizar(req, res) {

    // onde será pego a informação
    var nome = req.body.nome;
    var conteudo = req.body.conteudo;
    var id = req.params.id;
    var imagem = req.file.filename;

    if (nome == '') {
        res.status(400).send("Nome da Lenda não está definida!");
    } else if (conteudo == '') {
        res.status(400).send("Conteúdo não definido!");
    } else if (imagem == '') {
        res.status(400).send("Imagem não definido!");
    } else {
        lendasModel.atualizar(id, nome, conteudo, imagem)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a edição! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    cadastrar,
    listar,
    deletar,
    mostrar,
    atualizar
}