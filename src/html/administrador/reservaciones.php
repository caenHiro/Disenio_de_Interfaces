<?php 
session_start();
if(!isset($_SESSION["login"])){
	header('Location: index.php');
}
 ?>
 <!DOCTYPE html>
<html lang="es">
<html>
<head>
	<meta charset="UTF-8">
	<title>El Kfetal®</title>
	<link rel="stylesheet" href="../../css/estilo1.css">
	<script src="../../js/script.js" type="text/javascript"></script>

     <script type='text/javascript' src='../../js/jquery.min.js'></script>
    <script type='text/javascript' src='../../js/script1.js'></script>
    <script type='text/javascript' src='../../js/script.js'></script>
    <script type='text/javascript' src='../../js/llena_promocion.js'></script>

</head>
	<body>
		<header>
			<div id="menu">

				<div id="logo">
					<img src="../../images/Logo2.jpg" id="logoNav">
				</div>

				<div id="navegacion">

					<section id="espacio_sup">
				<a href="../../../home.html" style = " float:right">Cerrar sesion</a>

					</section>
					<nav id='cssmenu'>
						<ul>
			            	<li><a class="boton_menu" href="reservaciones.html">Reservaciones</a></li>
			            	<li><a class="boton_menu" onclick="pidePromociones()">Promociones</a></li>
			            	<li><a class="boton_menu" href="envia_correo.html">Envia promociones</a></li>
						</ul>
					</nav>
				</div>

			</div>
		</header>
		<div id="busqueda">
			<h2>Reservaciones por día </h2>
			<input id="calendario_reservacion" type="date">
	        <button id="boton_mostrar" onclick="generaHojas()">Mostrar</button>
	    </div>
        <div id="error_busqueda"></div>
		<div id = "reservaciones"></div>

	</body>

</html>
