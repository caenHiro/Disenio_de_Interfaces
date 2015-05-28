<?php





    $conx = mysqli_connect('localhost', 'fciencias', 'elkfetal', 'Kfetal');
    if(!$conx){

        die("Error: " . mysqli_connect_error());
    }

 $sql = "SELECT id, fechaInicio , fechaTermino , titulo , cuerpo , estado  FROM promocion ";
    $query = mysqli_query($conx, $sql);


    while($row = mysqli_fetch_assoc($query)){

    	echo "<div class="."'recuadro1' >";
	echo "<div class="."'contenido_recuadro' >";
	echo "<span> <b>Fecha de Inicio :</b> </span> ".$row['fechaInicio']."<br>";
	echo "<span> <b> Fecha de Termino : </b> </span> ".$row['fechaTermino']."<br>";
	echo "<span><b> Titulo :</b> </span> ".$row['titulo']."<br>";
	echo "<span><b> La promocion es : </b></span> ".$row['cuerpo']."<br>";
	echo "<span> <b>El estado de la promocion es :</b> </span> ".$row['estado']."<br>";
	echo "<button onclick= "."'elimina(".$row['id'].")'"."  > Eliminar </button>";
	echo "<button onclick= "."'estado(".$row['id'].")'"."  > Cambia estado </button>";
	echo "</div></div>";


    }




?>
