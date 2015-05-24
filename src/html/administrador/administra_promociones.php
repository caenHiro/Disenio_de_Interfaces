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
	<link rel="stylesheet" href="../../css/estilo1.css">
	<link rel="stylesheet" href="../../css/estilo_nav.css">
    <link rel="stylesheet" href="../../css/estilo_html.css">
<script type='text/javascript' src='../../js/script.js'></script>
     <script type='text/javascript' src='../../js/jquery.min.js'></script>
    <script type='text/javascript' src='../../js/script1.js'></script>
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
			            	<li><a class="boton_menu" href="reservaciones.php">Reservaciones</a></li>
			           <li><a class="boton_menu" onclick="pidePromociones()">Promociones</a></li>
			            	<li><a class="boton_menu" href="envia_correo.php">Envia promociones</a></li>
						</ul>
					</nav>
				</div>

			</div>
		</header>
		<br>
		<h2>Promociones</h2>

		<div id = "reservaciones1">

		</div>
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
				<input type="text" id="titulo" placeholder="Carlos Augusto" required >
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


	</body>

</html>
