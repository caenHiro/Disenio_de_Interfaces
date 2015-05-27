<?php



    $conx = mysqli_connect('localhost', 'root', '308264113', 'Kfetal');
    if(!$conx){

        die("Error: " . mysqli_connect_error());
    }

 $sql = "SELECT id, fechaInicio , fechaTermino , titulo , cuerpo , estado FROM promocion where estado = true ;";
    $query = mysqli_query($conx, $sql);

$_contador =10001;
$_promo = "";
$search  = array('10001', '10002', '10003', '10004');
$replace = array('uno', 'dos', 'tres', 'cuatro');

    while($row = mysqli_fetch_assoc($query) ){//&& $_contador <= 10004){
	if ($_contador <= 10004) {


    	$_promo = "<span  id='".$_contador."'  > <br><br>".
	 "fecha de Inicio:  ".$row['fechaInicio']."<br>".
	 " fecha de Termino:  ".$row['fechaTermino']."<br>".
	 " Titulo:  ".$row['titulo']."<br>".
	 " La promocion es :  ".$row['cuerpo']."<br>".
	 //" El estado de la promocion es :  ".$row['estado']."<br>".
	 " </span>";
	 $_contador = $_contador +1;
	 echo str_replace($search, $replace, $_promo);

	}

    }

?>
