create database lost;
use lost;

CREATE TABLE IF NOT EXISTS `usuario` (
  `id_usuario` INT NOT NULL AUTO_INCREMENT,
  `nome_usuario` VARCHAR(45) NULL,
  `email_usuario` VARCHAR(45) NULL,
  `senha_usuario` VARCHAR(45) NULL,
  PRIMARY KEY (`id_usuario`));

CREATE TABLE `lendas` (
  `id_lendas` int NOT NULL AUTO_INCREMENT,
  `nome_lendas` varchar(45) DEFAULT NULL,
  `conteudo_lenda` varchar(100) DEFAULT NULL,
  `imagem_lenda` varchar(45) DEFAULT NULL,
  `fk_usuario` int NOT NULL,
  PRIMARY KEY (`id_lendas`),
  FOREIGN KEY (`fk_usuario`) REFERENCES `usuario` (`id_usuario`)
);
