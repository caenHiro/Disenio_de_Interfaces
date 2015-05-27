<?php
$_fecha =$_POST["id_reservacion"];






    $conx = mysqli_connect('localhost', 'fciencias', 'elkfetal', 'Kfetal');
    if(!$conx){

        die("Error: " . mysqli_connect_error());
    }

 $sql = "SELECT (recervacion.id) as T , nombre , correo , telefono , horaLlegada,
  numPer  FROM recervacion  join cliente on cliente.id = recervacion.idUsuario where  recervacion.id ='" .$_fecha."'";//'" .$_POST["fecha"]."'";
    $query = mysqli_query($conx, $sql);


    while($row = mysqli_fetch_assoc($query)){


   	echo " <span id='nombre'> Nombre:  ".$row['nombre']."</span><br>";
	echo " Correo: <span id='correo'>".$row['correo']."</span><br>";
	echo " <span id='telefono'> Telefono:  ".$row['telefono']."</span><br>";
	echo " <span id='hora_ll'> Hora de llegada:  ".$row['horaLlegada']."</span><br>";
	echo " <span id='num_personas'> Número de personas:  ".$row['numPer']."</span><br>";


    }


$sql = "UPDATE recervacion SET estado= true WHERE id= '" .$_fecha."'";
    $query = mysqli_query($conx, $sql);



?>
