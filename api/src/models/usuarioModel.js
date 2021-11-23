var database = require('../database/config');

function listar() {
  var instrucao = `
        SELECT * FROM usuario;
    `;
  console.log('Executando a instrução SQL: \n' + instrucao);
  return database.executar(instrucao);
}

function entrar(id,email, senha) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ",
    senha
  );
  var instrucao = `
        SELECT * FROM usuario WHERE id_usuario = '${id}' AND email_usuario = '${email}' AND senha_usuario = '${senha}';
    `;
  console.log('Executando a instrução SQL: \n' + instrucao);
  return database.executar(instrucao);
}

function cadastrar(nome, email, senha) {
  console.log(
    "ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():",
    nome,
    email,
    senha
  );
  var instrucao = `
        INSERT INTO usuario (nome_usuario, email_usuario, senha_usuario) VALUES ('${nome}', '${email}', '${senha}');
    `;
  console.log('Executando a instrução SQL: \n' + instrucao);
  return database.executar(instrucao);
}

function deletar(id) {
  var instrucao = `
    DELETE FROM usuario WHERE id_usuario = ${id}
    `;
  return database.executar(instrucao);
}

function mostrar(id) {
  var instrucao = `
    SELECT nome_usuario, email_usuario FROM usuario where id_usuario = ${id}
    `;
  return database.executar(instrucao);
}

function atualizar(id, nome, email, senha) {
  var instrucao = `
    UPDATE usuario SET nome_usuario = '${nome}', email_usuario = '${email}', senha_usuario = '${senha}' WHERE id_usuario = ${id}
    `;
  return database.executar(instrucao);
}

module.exports = {
  entrar,
  cadastrar,
  listar,
  deletar,
  mostrar,
  atualizar
};
