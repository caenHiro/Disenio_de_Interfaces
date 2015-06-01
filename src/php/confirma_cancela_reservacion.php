<?php
$correo = $_POST["correo"];
$cuerpo = $_POST["cuerpo"];


header("Content-Type: text/html; charset=UTF-8");
$subject = "El kfetal";
/*
	Funciones para enviar correos
*/
function enviaCorreoUno($subject, $message, $headers){
	$resultado = "Correo Enviado";
if (!(@$correo=mail($_POST["correo"],$subject,$message,$headers))){
		$resultado = "Error al enviar el correo";
	}
	return $resultado;
}


header("Content-Type: text/html; charset=UTF-8");
$subject = "El Kfetal";
$message = 
		'
		<html> 
		<head> 
		<meta charset="utf-8">
		<title>El kfetal</title> 
		</head> 
		<body> '.
		
		$_POST["cuerpo"].'
		
		 
		</body> 
		</html>';
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n"; 
$headers .= "X-Mailer:PHP/".phpversion();



echo enviaCorreoUno($subject, $cuerpo, $headers);


?>
