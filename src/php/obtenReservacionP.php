<?php





    $conx = mysqli_connect('localhost', 'fciencias', 'elkfetal', 'Kfetal');
    if(!$conx){

        die("Error: " . mysqli_connect_error());
    }

 $sql = "SELECT (recervacion.id) as T , nombre , correo , telefono , fecha ,horaLlegada,
  numPer  FROM recervacion  join cliente on cliente.id = recervacion.idUsuario where  estado = false ";//'" .$_POST["fecha"]."'";
    $query = mysqli_query($conx, $sql);


    while($row = mysqli_fetch_assoc($query)){
    	echo "<div class="."'recuadro1' >";
    echo "<div class="."'contenido_recuadro1' >";
    echo "<span> Nombre: </span> ".$row['nombre']."<br>";
    echo "<span> Correo: </span> ".$row['correo']."<br>";
    echo "<span> Telefono: </span> ".$row['telefono']."<br>";
    echo "<span> Fecha: </span> ".$row['fecha']."<br>";
    echo "<span> Hora de llegada: </span> ".$row['horaLlegada']."<br>";
    echo "<span> Número de personas: </span> ".$row['numPer']."<br>";
    echo "<button onclick= "."'confirma(".$row['T'].")'"."> Aceptar </button>";
    echo "<button onclick= "."'cancela(".$row['T'].")'"." > Cancelar </button>";
    echo "</div></div>";

//echo $row['T'];
    }





?>
