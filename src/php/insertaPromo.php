<?php
$servername = "localhost";
$username = "fciencias";
$password = "elkfetal";
$dbname = "Kfetal";

$dia_inicio = $_POST["dia_inicio"];
$dia_termino = $_POST["dia_termino"];
$titulo = $_POST["titulo"];
$cuerpo = $_POST["cuerpo"];


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO promocion ( fechaInicio ,fechaTermino ,titulo ,cuerpo , estado ) VALUES  ( ' " .$dia_inicio. " ' , ' " .$dia_termino. " ' , ' " .$titulo. " '  ,  ' " .$cuerpo. " '  , false )";

if ($conn->query($sql) === TRUE) {
    echo "La promocion fue agregada con exicto";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();


?>
