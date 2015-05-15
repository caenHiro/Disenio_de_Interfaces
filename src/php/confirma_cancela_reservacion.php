<?php
$correo = $_POST["correo"];
$cuerpo = $_POST["cuerpo"];


function mandaCorreo($correo,$cuerpo){//, $j) {

include("class.phpmailer.php");
include("class.smtp.php");

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = "ssl";
$mail->Host = "smtp.gmail.com";
$mail->Port = 465;
$mail->Username = "elkfetal@gmail.com";
$mail->Password = "mximartinez22";
$mail->From = "elkfetal@gmail.com";
$mail->FromName = "El Kfetal";
$mail->Subject = "Confirmación de reservación.";
$mail->MsgHTML($cuerpo);

$mail->AddAddress($correo);//$_POST["receptor"]);
$mail->IsHTML(true);

if(!$mail->Send()) {

  return "Error: " . $mail->ErrorInfo;
} else {
  return "Mensaje enviado correctamente";

}

}

echo mandaCorreo($correo,$cuerpo);


?>