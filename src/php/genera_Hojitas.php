<?php
$nombre = "Jean Pierre";
$telefono = "21614399";
$correo = "jeanpierre@ciencias.unam.mx";
$dia = "miercoles";
$hora_llegada = "1212";
$hora_salida = "1212";
$n_personas = "1212";

// Necesitamos id de la reservacion

for($x = 0; $x <= 10; $x++){
	echo "<div class="."'recuadro' >";
	echo "<div class="."'contenido_recuadro' >";
	echo "<span> Nombre: </span> ".$nombre."<br>";
	echo "<span> Correo: </span> ".$correo."<br>";
	echo "<span> Telefono: </span> ".$telefono."<br>";
	echo "<span> Hora de llegada: </span> ".$hora_llegada."<br>";
	echo "<span> Hora de salida: </span> ".$hora_salida."<br>";
	echo "<span> Número de personas: </span> ".$n_personas."<br>";
	echo "</div></div>";
}

?>