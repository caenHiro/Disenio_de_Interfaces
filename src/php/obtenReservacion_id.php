<?php
$_fecha =$_POST["id_reservacion"];






    $conx = mysqli_connect('localhost', 'root', '308264113', 'Kfetal');
    if(!$conx){

        die("Error: " . mysqli_connect_error());
    }

 $sql = "SELECT (recervacion.id) as T , nombre , correo , telefono , horaLlegada,
 horaSalida, numPer  FROM recervacion  join cliente on cliente.id = recervacion.idUsuario where  recervacion.id ='" .$_fecha."'";//'" .$_POST["fecha"]."'";
    $query = mysqli_query($conx, $sql);


    while($row = mysqli_fetch_assoc($query)){

   	echo " Nombre:  ".$row['nombre']."<br>";
	echo " Correo:  ".$row['correo']."<br>";
	echo " Telefono:  ".$row['telefono']."<br>";
	echo " Hora de llegada:  ".$row['horaLlegada']."<br>";
	echo " Hora de salida:  ".$row['horaSalida']."<br>";
	echo " Número de personas:  ".$row['numPer']."<br>";

//echo $row['T'];
    }



/*

for($x = 0; $x <= 10; $x++){
	echo "<div class="."'recuadro' >";
	echo "<div class="."'contenido_recuadro' >";
	echo "<span> Nombre: </span> ".$nombre."<br>";
	echo "<span> Correo: </span> ".$correo."<br>";
	echo "<span> Telefono: </span> ".$telefono."<br>";
	echo "<span> Hora de llegada: </span> ".$hora_llegada."<br>";
	echo "<span> Hora de salida: </span> ".$hora_salida."<br>";
	echo "<span> Número de personas: </span> ".$n_personas."<br>";
	echo "boton";
	echo "</div></div>";
}
*/
?>