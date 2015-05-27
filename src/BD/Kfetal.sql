
DROP TABLE IF EXISTS cliente;
DROP TABLE IF EXISTS administrador;
DROP TABLE IF EXISTS recervacion;
DROP TABLE IF EXISTS promocion;

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


CREATE TABLE  recervacion (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  idUsuario  MEDIUMINT NOT NULL,
  fecha varchar(120) NOT NULL,
  horaLlegada varchar(120) NOT NULL,
  numPer varchar(120) NOT NULL,
  numMesa Integer NOT NULL,
  estado boolean NOT NULL,
  FOREIGN KEY (idUsuario) REFERENCES cliente(id)  ON DELETE CASCADE,
  PRIMARY KEY (id)
) ;




CREATE TABLE promocion (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  fechaInicio varchar(120) NOT NULL,
  fechaTermino varchar(120) NOT NULL,
  titulo varchar(120) NOT NULL,
  cuerpo varchar(1200) NOT NULL,
   estado boolean NOT NULL,
PRIMARY KEY (id)
);



insert into administrador ( nombre, correo,telefono, contrasenia) values ('Admin','kfetal' , '5522668844' ,'12345');

insert into cliente (nombre , correo ,telefono) values ('jp','jeanpierre@ciencias.unam.mx','5522669988');

insert into cliente (nombre , correo ,telefono) values ('caen','caen@ciencias.unam.mx','5522669988');

  insert into recervacion (idUsuario , fecha, horaLlegada ,  numPer , numMesa , estado) values (1,'12/12/12','10:30 am - 11:00 am', '1 - 4' ,2 , true);

  insert into recervacion (idUsuario , fecha, horaLlegada ,  numPer , numMesa , estado) values (2,'12/12/12','10:30 am - 11:00 am', '1 - 4' ,2 , true);

    insert into promocion (fechaInicio,fechaTermino, titulo, cuerpo , estado) values ('12/01/12','12/12/12','Cafes gratis','En la compra de 200 pesos llevate un capuchino gratis en tu siguiente visita ' , true);

