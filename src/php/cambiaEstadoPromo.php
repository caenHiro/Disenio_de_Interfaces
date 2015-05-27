<?php
$servername = "localhost";
$username = "root";
$password = "308264113";
$dbname = "Kfetal";


$id = $_POST["id"];
$edo = "";



    $conx = mysqli_connect('localhost' 'fciencias', 'elkfetal', 'Kfetal');
    if(!$conx){

        die("Error: " . mysqli_connect_error());
    }


 $sql = "SELECT estado  FROM promocion where  id =".$id." ;";
    $query = mysqli_query($conx, $sql);


    while($row = mysqli_fetch_assoc($query)){


   	$edo =$row['estado'];


    }






// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if ($edo == 0) {
$sql = "UPDATE promocion SET estado=true WHERE id='".$id."'";
}else{
$sql = "UPDATE promocion SET estado=false WHERE id='".$id."'";

}





if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}


$conn->close();



?>
