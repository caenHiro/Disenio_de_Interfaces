
DROP TABLE IF EXISTS cliente;
DROP TABLE IF EXISTS administrador;
DROP TABLE IF EXISTS mesa;
DROP TABLE IF EXISTS horario;
DROP TABLE IF EXISTS recervacion;

CREATE TABLE  cliente (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  nombre varchar(120) NOT NULL,
  correo  varchar(100) NOT NULL,
  telefono  varchar(50) NOT NULL,

  PRIMARY KEY (id)
) ;

CREATE TABLE  administrador (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  nombre varchar(120) NOT NULL,
  correo  varchar(100) NOT NULL,
  telefono  varchar(50) NOT NULL,
  contrasenia varchar(120) NOT NULL,
  PRIMARY KEY (id)
) ;

CREATE TABLE  mesa (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  nombre varchar(120) NOT NULL,
  correo  varchar(100) NOT NULL,
  telefono  varchar(50) NOT NULL,

  PRIMARY KEY (id)
) ;



CREATE TABLE  horario (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  hora  varchar(50) NOT NULL unique,

  PRIMARY KEY (id )
 
) ;



CREATE TABLE  recervacion (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  idMesa MEDIUMINT NOT NULL,
  idHorario MEDIUMINT NOT NULL,
  idUsuario  MEDIUMINT NOT NULL,
 FOREIGN KEY (idMesa) REFERENCES mesa(id)  ON DELETE CASCADE,
  FOREIGN KEY (idHorario) REFERENCES horario(id)  ON DELETE CASCADE,
   FOREIGN KEY (idUsuario) REFERENCES cliente(id)  ON DELETE CASCADE,
  PRIMARY KEY (id)
  
) ;


insert into horario (hora) values ('8:00-9:00');
insert into horario (hora)values ('10:00-11:00');
insert into horario (hora)values ('11:00-12:00');
insert into horario (hora)values ('12:00-13:00');
insert into horario (hora)values ('14:00-15:00');
insert into horario (hora)values ('15:00-16:00');
insert into administrador ( nombre, correo,telefono, contrasenia) values ('Admin','kfetal@gmail.com' , '5522668844' ,'12345');

select * from horario;

select * from administrador;