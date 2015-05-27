<?php


$_CuerpoCorreo = $_POST["correo"];
$_total = 0;
$_contador = 0;


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



    $conx = mysqli_connect('localhost', 'root', '308264113', 'Kfetal');
    if(!$conx){

        die("Error: " . mysqli_connect_error());
    }


 $sql = "SELECT correo FROM cliente" ;

    $query = mysqli_query($conx, $sql);


    while($row = mysqli_fetch_assoc($query) ){


      $mail->AddAddress($row['correo']);
    }

  mysqli_close();



$mail->IsHTML(true);

if(!$mail->Send()) {

  return "Error: " . $mail->ErrorInfo;
} else {
  return "Mensaje enviado correctamente";

}

}




echo mandaCorreo ($_CuerpoCorreo );


?>
