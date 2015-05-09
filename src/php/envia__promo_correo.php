<?php


include("class.phpmailer.php");
include("class.smtp.php");

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = "ssl";
$mail->Host = "smtp.gmail.com";
$mail->Port = 465;
$mail->Username = "correo";
$mail->Password = "contraseña";
$mail->From = "caen@ciencias.unam.mx";
$mail->FromName = "caen";
$mail->Subject = "[Prueba]";
$mail->MsgHTML( $_POST["correo"]);

$mail->AddAddress("e.sc.a@hotmail.com");

$mail->IsHTML(true);

if(!$mail->Send()) {

  echo "Error: " . $mail->ErrorInfo;
} else {
  echo "Mensaje enviado correctamente";

}



?>
