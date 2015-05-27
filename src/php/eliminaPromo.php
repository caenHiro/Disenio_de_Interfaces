<?php
$servername = "localhost";
$username = "root";
$password = "308264113";
$dbname = "Kfetal";


$id = $_POST["id"];




$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}




// sql to delete a record
$sql = "DELETE FROM promocion WHERE id='".$id."'";

if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . $conn->error;
}

$conn->close();




?>
