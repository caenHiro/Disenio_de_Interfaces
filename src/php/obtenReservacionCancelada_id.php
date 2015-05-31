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


   	echo " <span id='nombre'> <b> Nombre : </b>  ".$row['nombre']."</span><br>";
	echo " <b>Correo :</b> <span id='correo'>".$row['correo']."</span><br>";
	echo " <span id='telefono'> <b>Telefono :</b>   ".$row['telefono']."</span><br>";
	echo " <span id='hora_ll'> <b>Hora de llegada :</b>  ".$row['horaLlegada']."</span><br>";
	echo " <span id='num_personas'> <b>Número de personas :</b>  ".$row['numPer']."</span><br>";


    }


$sql = "UPDATE recervacion SET estado= false WHERE id= '" .$_fecha."'";
    $query = mysqli_query($conx, $sql);



?>
