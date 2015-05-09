<?php

$nombre = $_POST['nombre'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$dia = $_POST['dia'];
$hora_llegada = $_POST['hora_llegada'];
$hora_salida = $_POST['hora_salida'];
$n_personas = $_POST['n_personas'];


echo $hora_llegada;

$conx = mysqli_connect('localhost', 'root', '308264113', 'Kfetal');
if(!$conx){
    die("Error: " . mysqli_connect_error());
}



?>