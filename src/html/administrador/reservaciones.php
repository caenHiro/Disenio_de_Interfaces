<?php
session_start();
if(!isset($_SESSION["correo"])){
	header('Location: ../inicio.html');
}
 ?>
 <!DOCTYPE html>
<html lang="es">
<html>
<head>
	<meta charset="UTF-8">
	<title>El Kfetal®</title>
	<link rel="stylesheet" href="../../css/estilo_nav.css">
   	 <link rel="stylesheet" href="../../css/estilo_html.css">
	<link rel="stylesheet" href="../../css/estilo1.css">
	<link rel="stylesheet" href="../../css/estilo_muestra_promocion.css">

	<script type='text/javascript' src='../../js/jquery.js'></script>
   	  <script type='text/javascript' src='../../js/jquery.min.js'></script>
  	  <script type='text/javascript' src='../../js/jquery-2.1.3.min.js'></script>
    	<script type='text/javascript' src='../../js/script.js'></script>
	<script type='text/javascript' src='../../js/script1.js'></script>


</head>
	<body  onload="pideReservacionPendiente()" >
		<header>
			<div id="menu">

				<div id="logo">
					<img src="../../images/Logo2.jpg" id="logoNav">
				</div>

				<div id="navegacion">

					<section id="espacio_sup">
				<a onclick="cerrarSesion()" style = " float:right">Cerrar sesion</a>

					</section>
					<nav id='cssmenu'>
						<ul>
			            	<li><a class="boton_menu" href="reservaciones.php">Reservaciones</a></li>
			            	<li><a class="boton_menu" href="administra_promociones.php">Promociones</a></li>
			            	<li><a class="boton_menu" href="envia_correo.php">Envia promociones</a></li>
						</ul>
					</nav>
				</div>

			</div>
		</header>
		<div id="busqueda">
			<h2 style="margin-left: 2%;">Reservaciones por día </h2>
			<input id="calendario_reservacion" type="date" style="margin-left: 11%;">
	        <button id="boton_mostrar" onclick="generaHojas()">Mostrar</button>
	    </div>
                        <div id="error_busqueda"></div>
		<div id = "reservaciones">

		</div>

		<h4 style="margin-left: 2%;">Reservaciones pendientes</h4>
		<div id = "reservaciones1">

		</div>
	</body>

</html>
