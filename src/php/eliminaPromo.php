<?php
$servername = "localhost";
$username = 'fciencias';
$password = 'elkfetal';
$dbname = "Kfetal";


$id = $_POST["id"];




$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}




// sql to delete a record
$sql = "DELETE FROM promocion WHERE id='".$id."'";

if ($conn->query($sql) === TRUE) {
    echo "La promocion fue eliminada ";
} else {
    echo "Error al borrar : " . $conn->error;
}

$conn->close();




?>
