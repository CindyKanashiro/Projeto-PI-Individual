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
  conteudo_lenda text,
  imagem_lenda varchar(45),
  fk_usuario int,
  PRIMARY KEY (id_lendas),
  FOREIGN KEY (fk_usuario) REFERENCES usuario (id_usuario)
);

INSERT INTO `usuario` (`id_usuario`,`nome_usuario`,`email_usuario`,`senha_usuario`,`view_usuario`) VALUES (4,'Cindy Kanashiro ','leco.jaen1@gmail.com','1234567',14);
INSERT INTO `usuario` (`id_usuario`,`nome_usuario`,`email_usuario`,`senha_usuario`,`view_usuario`) VALUES (17,'Sakura','sakura@gmail.com','1234567',1);

INSERT INTO `lendas` (`id_lendas`,`nome_lendas`,`conteudo_lenda`,`imagem_lenda`,`fk_usuario`) VALUES (29,'Daruma','A lenda diz que após esses 9 anos de meditação, Bodhidharma atingiu o tão desejado ”estado de iluminação”,\r\n ou seja, ver com a mente, ao invés dos olhos.\r\n Foi assim que ficou relacionada à esperança e a realização de sonhos devido a paciencia, perseverança e obstinação.','1638324753079.png',17);
INSERT INTO `lendas` (`id_lendas`,`nome_lendas`,`conteudo_lenda`,`imagem_lenda`,`fk_usuario`) VALUES (30,'Kitsune Mask','É dito que, no Japão, sua imagem simboliza inteligência, sabedoria e, de acordo com relatos contidos em várias lendas à seu respeito, são animais com poderes mágicos (místicos), sagrados ou amaldiçoados.','1638325305489.png',4);
INSERT INTO `lendas` (`id_lendas`,`nome_lendas`,`conteudo_lenda`,`imagem_lenda`,`fk_usuario`) VALUES (31,'Maneki Neko',' A lenda diz que uma senhora vivia com seu amado gato, mas devido a sua extrema pobreza, decidiu vendê-lo, pela falta de comida para o gato. O gato apareceu em seu sonho, falando para construir uma estátua em sua homenagem, pois traria sorte.','1638326169550.png',4);
INSERT INTO `lendas` (`id_lendas`,`nome_lendas`,`conteudo_lenda`,`imagem_lenda`,`fk_usuario`) VALUES (32,'Amaterasu','Amaterasu tem um perfil muito peculiar no mundo de Okami. Por ser representada como um lobo branco, ela possui algumas das características mais lupinas, como seu estilo aventureiro e sempre à caça ou à procura de novos horizontes','1638326256667.png',4);
INSERT INTO `lendas` (`id_lendas`,`nome_lendas`,`conteudo_lenda`,`imagem_lenda`,`fk_usuario`) VALUES (33,'Sakura','Sakura olhou em volta e se lembrou da guerra. Então, ela escolheu se fundir com Yohiro(árvore). E o milagre aconteceu. Os dois se tornaram um e a árvore finalmente floresceu.A lenda de Sakura nos mostra que outra pessoa pode revelar o que há de melhor em nós.','1638326422956.png',4);
INSERT INTO `lendas` (`id_lendas`,`nome_lendas`,`conteudo_lenda`,`imagem_lenda`,`fk_usuario`) VALUES (34,'Seiryu','O dragão azul do Leste Seiryu é o governante da parte oriental do quadrante, e é representado por um dragão. Governa os signos do tigre, coelho e do dragão. Seu elemento é a madeira, a sua estação é a primavera e a sua virtude é a benevolência','1638326815694.png',4);
