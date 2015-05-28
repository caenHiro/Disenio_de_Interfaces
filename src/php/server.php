<?php

session_start();


$total = 0;

    $conx = mysqli_connect('localhost', 'fciencias', 'elkfetal', 'Kfetal');
    if(!$conx){

        die("Error: " . mysqli_connect_error());
    }

 $sql = "SELECT count(*) as total FROM administrador where contrasenia = '" .$_POST["contra"]. "'and correo = '".$_POST["correo"]."'";
    $query = mysqli_query($conx, $sql);


    while($row = mysqli_fetch_assoc($query)){
       $total = $row['total'];

    }



if ($total == 1) {
  $_SESSION["correo"] = $_POST["correo"];
	echo 10;

}else{

	echo "intenta de nuevo";
}




  mysqli_close();



?>
