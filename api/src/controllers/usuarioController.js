var usuarioModel = require('../models/usuarioModel');

var sessoes = [];

function listar(req, res) {
  usuarioModel
    .listar()
    .then(function (resultado) {
      if (resultado.length > 0) {
        res.status(200).json(resultado);
      } else {
        res.status(204).send('Nenhum resultado encontrado!');
      }
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        'Houve um erro ao realizar a consulta! Erro: ',
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function entrar(req, res) {
  var email = req.body.email;
  var senha = req.body.senha;

  if (email == undefined) {
    res.status(400).send('Seu email está undefined!');
  } else if (senha == undefined) {
    res.status(400).send('Sua senha está indefinida!');
  } else {
    usuarioModel
      .entrar(email, senha)
      .then(function (resultado) {
        console.log(`\nResultados encontrados: ${resultado.length}`);
        console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

        if (resultado.length == 1) {
          console.log(resultado);
          res.json(resultado[0]);
        } else if (resultado.length == 0) {
          res.status(403).send('Email e/ou senha inválido(s)');
        } else {
          res.status(403).send('Mais de um usuário com o mesmo login e senha!');
        }
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          '\nHouve um erro ao realizar o login! Erro: ',
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function cadastrar(req, res) {
  var nome = req.body.nome;
  var email = req.body.email;
  var senha = req.body.senha;

  console.log('nada');
  console.log(req);

  if (nome == '') {
    res.status(400).send('Seu nome não está definido');
  } else if (email == '') {
    res.status(400).send('Seu email não está definido!');
  } else if (senha == '') {
    res.status(400).send('Sua senha não está definida!');
  } else {
    usuarioModel
      .cadastrar(nome, email, senha)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          '\nHouve um erro ao realizar o cadastro! Erro: ',
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function deletar(req, res) {
  usuarioModel
    .deletar(req.params.id)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        '\nHouve um erro ao realizar a exclusão! Erro: ',
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function mostrar(req, res) {
  usuarioModel
    .mostrar(req.params.id)
    .then(function (resultado) {
      res.json(resultado);
    })
    .catch(function (erro) {
      console.log(erro);
      console.log(
        '\nHouve um erro ao realizar a consulta! Erro: ',
        erro.sqlMessage
      );
      res.status(500).json(erro.sqlMessage);
    });
}

function atualizar(req, res) {
  var nome = req.body.nome;
  var email = req.body.email;
  var senha = req.body.senha;
  var id = req.params.id;

  if (nome == '') {
    res.status(400).send('Nome do usuário não está definida!');
  } else if (email == '') {
    res.status(400).send('Email não definido!');
  } else if (senha == '') {
    res.status(400).send('Sua senha não está definida!');
  } else {
    usuarioModel
      .atualizar(id, nome, email, senha)
      .then(function (resultado) {
        res.json(resultado);
      })
      .catch(function (erro) {
        console.log(erro);
        console.log(
          '\nHouve um erro ao realizar a edição! Erro: ',
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  entrar,
  cadastrar,
  listar,
  deletar,
  mostrar,
  atualizar
};
