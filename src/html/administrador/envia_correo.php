<?php 
session_start();
if(!isset($_SESSION["login"])){
	header('Location: index.php');
}
 ?>
 <!DOCTYPE html>
<html lang="en">
<html>
	<head>
	<meta charset="UTF-8">
	<meta http-equiv="Content-Type" content="text/html;charset=ISO-8859-1" >
	<title>El Kfetal®</title>

	<link rel="stylesheet" href="../../css/estilo1.css">
	<script type="text/javascript" src="../../ckeditor/ckeditor.js"></script>
	<script type='text/javascript' src='../../js/script.js'></script>
     <script type='text/javascript' src='../../js/jquery.min.js'></script>
    <script type='text/javascript' src='../../js/script1.js'></script>
    <script type='text/javascript' src='../../js/llena_promocion.js'></script>
	</head>
	<body>

  	<header>
        <div id="menu">

            <div id="logo">
                <img src="../../images/Logo2.jpg" id="logoNav">
            </div>

            <div id="navegacion">

                <section id="espacio_sup">
	<a href="../../../home.html" style = " float:right">Cerrar sesion</a>

                </section>
                <nav id='cssmenu'>
                    <ul>
			            	<li><a class="boton_menu" href="reservaciones.html">Reservaciones</a></li>
			            	<li><a class="boton_menu" onclick="pidePromociones()">Promociones</a></li>
			            	<li><a class="boton_menu" href="envia_correo.html">Envia promociones</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

		<center>
		<h1>Envia promociones</h1>
		</center>
		<br>

		<div style = "width: 100.6%">


		<textarea cols="50" id="editor1" name="editor1" rows="10">
		</textarea>
		<script type="text/javascript">
		CKEDITOR.replace( 'editor1', {
		toolbar: [
			['Source','-','Save','NewPage','Preview','-','Templates'],
			['Cut','Copy','Paste','PasteText','PasteFromWord','-','Print', 'SpellChecker', 'Scayt'],
			['Undo','Redo','-','Find','Replace','-','SelectAll','RemoveFormat'],
			['Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField'],
			'/',
			['Bold','Italic','Underline','Strike','-','Subscript','Superscript'],
			['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
			['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
			['Link','Unlink','Anchor'],
			['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak'],
			'/',
			['Styles','Format','Font','FontSize'],
			['TextColor','BGColor'],
			['Maximize', 'ShowBlocks','-','About','EqnEditor']
		]
		});
		</script>



<br>
<br>



<button onclick="envia_promo_correo()" > Aceptar </button>
<br>
<br>
<br>

<div id="data">

</div>


</body>

<script src="../../js/script.js"></script>
</html>