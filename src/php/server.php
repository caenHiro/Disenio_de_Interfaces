<?php


$total = 0;

    $conx = mysqli_connect('localhost', 'root', '308264113', 'pruebas');
    if(!$conx){

        die("Error: " . mysqli_connect_error());
    }

 $sql = "SELECT count(*) as total FROM administrador where contrasenia = '" .$_POST["contra"]. "'and correo = '".$_POST["correo"]."'";
    $query = mysqli_query($conx, $sql);


    while($row = mysqli_fetch_assoc($query)){
       $total = $row['total'];

    }


if ($total == 1) {
	echo 10;

}else{

	echo "intenta de nuevo";
}




  mysqli_close();



?>
