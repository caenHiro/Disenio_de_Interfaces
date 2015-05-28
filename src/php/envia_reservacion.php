<?php

$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$dia = $_POST['dia'];
$hora_llegada = $_POST['hora'];

$n_personas = $_POST['personas'];
$total =0 ;
$idUser=0;

//echo $hora_llegada;

$conx = mysqli_connect('localhost', 'fciencias', 'elkfetal', 'Kfetal');


if(!$conx){
    die("Error: " . mysqli_connect_error());
}




 $sql = "SELECT count(*) as total FROM cliente where  correo ='" .$correo."'";
    $query = mysqli_query($conx, $sql);


    while($row = mysqli_fetch_assoc($query)){

    	$total = $row["total"];


    }

if ($total > 0) {

 $sql = "SELECT id  FROM cliente where  correo ='" .$correo."';";
    $query = mysqli_query($conx, $sql);


    while($row = mysqli_fetch_assoc($query)){

    	$idUser = $row["id"];

}

$sql = "INSERT INTO  recervacion ( idUsuario , fecha , horaLlegada ,  numPer , numMesa , estado) VALUES

(".$idUser.",'" .$dia."','" .$hora_llegada."','".$n_personas."',1 , false);";

  mysqli_query($conx,$sql);

  echo "Gracias por hacer una reservacion de nuevo  ".$nombre;

} else{


$sql = "INSERT INTO  cliente ( nombre , correo , telefono) VALUES

('".$nombre."','".$correo."','".$telefono."');";

  mysqli_query($conx,$sql);


 $sql = "SELECT id  FROM cliente where  correo ='" .$correo."';";
    $query = mysqli_query($conx, $sql);


    while($row = mysqli_fetch_assoc($query)){

    	$idUser = $row["id"];

}

$sql = "INSERT INTO  recervacion ( idUsuario , fecha , horaLlegada ,  numPer , numMesa , estado) VALUES

(".$idUser.",'" .$dia."','" .$hora_llegada."','".$n_personas."',1 , false);";
  mysqli_query($conx,$sql);

  echo "Gracias por hacer un reservacion en el Kfetal  ".$nombre;


}


?>
