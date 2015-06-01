<?php






header("Content-Type: text/html; charset=UTF-8");
$subject = "El kfetal";
/*
  Funciones para enviar correos
*/
function enviaCorreoUno($correo ,$subject, $message, $headers){
  $resultado = "Correo Enviado";
if (!(@$correo=mail($correo , $subject,$message,$headers))){
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

    $_POST["correo"].'


    </body>
    </html>';
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "X-Mailer:PHP/".phpversion();














    $conx = mysqli_connect('localhost', 'fciencias', 'elkfetal', 'Kfetal');
    if(!$conx){

        die("Error: " . mysqli_connect_error());
    }


 $sql = "SELECT correo FROM cliente" ;

    $query = mysqli_query($conx, $sql);


    while($row = mysqli_fetch_assoc($query) ){


      echo enviaCorreoUno($row['correo'],$subject, $message, $headers);
    }

  mysqli_close();



?>
