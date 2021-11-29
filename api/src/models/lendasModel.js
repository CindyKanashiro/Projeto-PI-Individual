var database = require("../database/config")

function listar() {
    var instrucao = `
        SELECT lendas.id_lendas, lendas.nome_lendas, lendas.conteudo_lenda, lendas.imagem_lenda, usuario.nome_usuario
        FROM lendas 
        INNER JOIN usuario ON lendas.fk_usuario = usuario.id_usuario
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, conteudo, imagem,fk_usuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, conteudo);
    var instrucao = `
        INSERT INTO lendas (nome_lendas, conteudo_lenda, imagem_lenda, fk_usuario) VALUES ('${nome}','${conteudo}','${imagem}','${fk_usuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletar(id) {
    var instrucao = `
    DELETE FROM lendas WHERE id_lendas = ${id};
    `;
    return database.executar(instrucao);
}

function mostrar(id) {
    var instrucao = `
    SELECT nome_lendas, conteudo_lenda FROM lendas where id_lendas = ${id}
    `;
    return database.executar(instrucao);
}

function atualizar(id, nome, conteudo, imagem) {
    var instrucao = `
    UPDATE lendas SET nome_lendas = '${nome}', conteudo_lenda = '${conteudo}', imagem_lenda = '${imagem}' WHERE id_lendas = ${id}
    `;
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
    deletar,
    mostrar,
    atualizar
};