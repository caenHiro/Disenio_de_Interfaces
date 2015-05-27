<?php
session_start();
if(!isset($_SESSION["correo"])){
	header('Location: ../inicio.html');
}
 ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>El Kfetal®</title>
	<link rel="stylesheet" href="../../css/formularioPromo.css">
	<link rel="stylesheet" href="../../css/estilo_html.css">
	<link rel="stylesheet" href="../../css/estilo_nav.css">
<link rel="stylesheet" href="../../css/estilo_muestra_promocion.css">
<script type='text/javascript' src='../../js/script.js'></script>
     <script type='text/javascript' src='../../js/jquery.min.js'></script>
    <script type='text/javascript' src='../../js/script1.js'></script>
    <script type='text/javascript' src='../../js/llena_promocion.js'></script>
</head>
	<body onload="pidePromociones()">
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
		<br>


		<h2>Promociones</h2>

		<div id = "reservaciones">
		<h4> Agrega una promocion</h4>


		<button  id="formulario">
		<a href="#openModal">Agregar</a>
		</button>

		<div id="openModal" class="modalDialog">
		<div>
		<a href="#close" title="Cerrar" class="close">X</a>

		<h2>Agrega una promocion</h2>


		<div id = "form_reservacion_promo">
			<div class ="contact_form">


				<span>Fecha Inicio</span>
				<br>
				<input type="date" id="dia_inicio"  required>
				<br>
				<span>Fecha termino</span>
				<br>
				<input type="date" id="dia_termino"  required>
				<br>

				<span>Titulo</span>
				<br>
				<input type="text" id="titulo"  required >
				<br>
				<span>Cuerpo de la promocion</span>
				<br>
				<textarea name="" id="cuerpo" cols="30" rows="10">

				</textarea>

				<br>
				<br><br>
				<button onclick="inserta_promocion()"> Agrega</button>
				<br>


				<div id="error_form"></div>
				</div>

			</div>
</div>
</div>

		</div>

		<div id = "reservaciones1">
		<h4>Tus promociones son :</h4>

		</div>



	</body>

</html>

