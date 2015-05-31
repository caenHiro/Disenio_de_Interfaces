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
    echo "<span><b> Nombre :</b> </span> ".$row['nombre']."<br>";
    echo "<span><b> Correo :</b> </span> ".$row['correo']."<br>";
    echo "<span><b> Telefono :</b> </span> ".$row['telefono']."<br>";
    echo "<span> <b>Fecha : </b> </span> ".$row['fecha']."<br>";
    echo "<span> <b> Hora de llegada :</b> </span> ".$row['horaLlegada']."<br>";
    echo "<span><b> Número de personas :</b> </span> ".$row['numPer']."<br>";
    echo "<button onclick= "."'confirma(".$row['T'].")'"."> Aceptar </button>";
    echo "<button onclick= "."'cancela(".$row['T'].")'"." > Cancelar </button>";
    echo "<button onclick= "."'eliminaReservacion(".$row['T'].")'"." > Elimina </button>";
    echo "</div></div>";

    }





?>
