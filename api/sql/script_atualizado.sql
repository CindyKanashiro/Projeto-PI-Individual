create database lost;
use lost;

CREATE TABLE IF NOT EXISTS usuario (
  id_usuario INT NOT NULL AUTO_INCREMENT,
  nome_usuario VARCHAR(45),
  email_usuario VARCHAR(45),
  senha_usuario VARCHAR(45),
  view_usuario int default 0,
  PRIMARY KEY (`id_usuario`));

CREATE TABLE lendas (
  id_lendas int NOT NULL AUTO_INCREMENT,
  nome_lendas varchar(45),
  conteudo_lenda varchar(100),
  imagem_lenda varchar(45),
  fk_usuario int,
  PRIMARY KEY (id_lendas),
  FOREIGN KEY (fk_usuario) REFERENCES usuario (id_usuario)
);
