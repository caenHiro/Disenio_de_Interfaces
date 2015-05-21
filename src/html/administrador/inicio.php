<?php  
session_start();

if($_POST["login"]==="carlos"){
	$_SESSION["login"] = $_POST["login"];
} else {
	echo "Error: No te has registrado";
}


?>