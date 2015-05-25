<?php





    $conx = mysqli_connect('localhost', 'root', '308264113', 'Kfetal');
    if(!$conx){

        die("Error: " . mysqli_connect_error());
    }

 $sql = "SELECT id, fechaInicio , fechaTermino , titulo , cuerpo  FROM promocion ";
    $query = mysqli_query($conx, $sql);


    while($row = mysqli_fetch_assoc($query)){

    	echo "<div class="."'recuadro1' >";
	echo "<div class="."'contenido_recuadro' >";
	echo "<span> fecha de Inicio: </span> ".$row['fechaInicio']."<br>";
	echo "<span> fecha de Termino: </span> ".$row['fechaTermino']."<br>";
	echo "<span> Titulo: </span> ".$row['titulo']."<br>";
	echo "<span> La promocion es : </span> ".$row['cuerpo']."<br>";
	echo "<span> El estado de la promocion es : </span> ".$row['cuerpo']."<br>";
	//echo "<button > Editar </button>";
	echo "<button onclick= "."'elimina(".$row['id'].")'"."  > Eliminar </button>";
	echo "<button onclick= "."'estado(".$row['id'].")'"."  > Cambia estado </button>";
	echo "</div></div>";

//echo $row['T'];
    }




?>
