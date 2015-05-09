<?php


$_CuerpoCorreo = $_POST["correo"];



function mandaCorreo($i){//, $j) {

include("class.phpmailer.php");
include("class.smtp.php");

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = "ssl";
$mail->Host = "smtp.gmail.com";
$mail->Port = 465;
$mail->Username = "Correo del kfetal";
$mail->Password = "contraseña del cafetal";
$mail->From = "CorreoDelKfetal";
$mail->FromName = "El Kfetal";
$mail->Subject = "[Promocion del mes ]";
$mail->MsgHTML($i);

$mail->AddAddress("micorreo");//$_POST["receptor"]);



$mail->IsHTML(true);

if(!$mail->Send()) {

  return "Error: " . $mail->ErrorInfo;
} else {
  return "Mensaje enviado correctamente";

}

}




echo mandaCorreo ($_CuerpoCorreo );


?>
