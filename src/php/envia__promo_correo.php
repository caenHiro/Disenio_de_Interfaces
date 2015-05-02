<?php
/*

$str   = addslashes($_POST["correo"]);

$order   = array("\r\n", "\n", "\r");
$replace = '<br />';

// Procesa primero \r\n así no es convertido dos veces.
$newstr = str_replace($order, $replace, $str);

echo $newstr;
//echo $_POST["correo"];
*/
/*

para  = 'caen@ciencias.unam.mx' . ', '; // atención a la coma
$para .= 'e.sc.a@hotmail.com';

// título
$título = 'Recordatorio de cumpleaños para Agosto';

// mensaje
$mensaje =  $_POST["correo"];

// Para enviar un correo HTML, debe establecerse la cabecera Content-type
$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";


//dirección del remitente
$cabeceras .= "From: caen Hiro<caen@ciencias.unam.mx>\r\n";

// Enviarlo



echo  mail($para, $título, $mensaje, $cabeceras);


*/

include("class.phpmailer.php");
include("class.smtp.php");

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = "ssl";
$mail->Host = "smtp.gmail.com";
$mail->Port = 465;
$mail->Username = "caen@ciencias.unam.mx";
$mail->Password = "";


$mail->From = "caen@ciencias.unam.mx";
$mail->FromName = "caen";
$mail->Subject = "[Prueba]";
//$mail->AltBody = "Hola, te doy mi nuevo numero\nxxxx.";
$mail->MsgHTML( $_POST["correo"]);

$mail->AddAddress("e.sc.a@hotmail.com");
$mail->IsHTML(true);

if(!$mail->Send()) {
  echo "Error: " . $mail->ErrorInfo;
} else {
  echo "Mensaje enviado correctamente";

}



?>
