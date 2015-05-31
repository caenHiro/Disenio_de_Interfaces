<?php
$servername = "localhost";
$username = "fciencias";
$password = "elkfetal";
$dbname = "Kfetal";


$id = $_POST["id"];
$edo = "";



    $conx = mysqli_connect('localhost' ,'fciencias', 'elkfetal', 'Kfetal');
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
    echo "El estado se cambio ";
} else {
    echo "Error al cambiar el estado : " . $conn->error;
}


$conn->close();



?>
