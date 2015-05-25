

       function recogeDatos(){
            var correo = document.getElementById("correo").value;
            var contra = document.getElementById("contra").value;


            if(contra==="" || contra==null || correo === "" || correo == null ){
                document.getElementById("data").innerHTML = "Llena todos los campos";
                return;
            }

            var parametros = "correo="+correo+"&contra="+contra;

            mandaDatos(parametros);
       }



       function mandaDatos(parametros){
        var ajax = new XMLHttpRequest();
        ajax.open("POST", "../php/server.php", true);
        ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        ajax.onreadystatechange = function(){
            if(ajax.status == 200 && ajax.readyState == 4){
            if(ajax.responseText ==  10 ){
                window.location.href = "../html/administrador/reservaciones.php" ;
            }
              document.getElementById("data").innerHTML = ajax.responseText;

            } else {
                document.getElementById("data").innerHTML = "No hay conexión";
            }
       }
       ajax.send(parametros);
       }


       function recogeFecha(){
          var fecha = document.getElementById("fecha").value;
          var parametros = "fecha="+fecha;
          mandaFecha(parametros);
       }


       function mandaFecha(parametros){
          var ajax = new XMLHttpRequest();

          ajax.onreadystatechange = function(){
              if(ajax.status == 200 && ajax.readyState == 4){
                if(ajax.responseText ==  10 ){
                  window.location.href = "../html/reservaciones.php" ;
                }
                document.getElementById("fechas").innerHTML = ajax.responseText;

              } else {
                  document.getElementById("fechas").innerHTML = "No hay conexión";
              }
         }
         ajax.open("POST", "../php/llenaFecha.php", true);
         ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
         ajax.send(parametros);
       }


function valida_reservacion(){
  var nombre = document.getElementById("nombre").value;
  var telefono = document.getElementById("telefono").value;
  var correo = document.getElementById("correo").value;
  var dia = document.getElementById("dia_reservacion").value;
//  var hora_llegada = document.getElementById("hora_llegada").value;
//  var hora_salida = document.getElementById("hora_salida").value;
//  var n_personas = document.getElementById("n_personas").value;

  var estado = true;
  if(nombre == "") {
    mandaError("error_form", "Debes proporcionar un nombre");
    estado = false;
  }
  if(!isNaN(nombre)){
    mandaError("error_form", "Proporcione un nombre valido");
    estado = false;
  }

  if(!validaTelefono(telefono)){
    mandaError("error_form","Debes proporcionar un teléfono váildo");
    estado = false;
  }

  if(!validaCorreo(correo)){
    mandaError("error_form","Poporciona un correo valido");
    estado = false;
  }

 // if(n_personas == ""){
 //   mandaError("error_form","Debes proporcionar un # váildo");
 //   estado = false;
  //}
 // if(n_personas <= 0){
  //  mandaError("error_form","Al menos debe haber alguien en la reservacion ");
  //  estado = false;
  //}

 dia = dia.replace(new RegExp(/-/g),"/");
  if(estado){
      var parametros = "nombre="+nombre+"&telefono="+telefono+"&correo="+correo+"&dia="+dia+"&hora_llegada="+hora_llegada+"&hora_salida="+hora_salida+"&n_personas="+n_personas;
      mandaReservacion(parametros);
  } else {


  }
}
function limpiaDiv(div){
  document.getElementById(div).innerHTML = "";
}

function validaCorreo(email){
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}
function validaTelefono(tel){

  if(tel == ""){
    return false;
  }
  return true;
}
function mandaError(idError,mensaje){
  document.getElementById(idError).innerHTML = mensaje;
}

function mandaReservacion(parametros){
         var ajax = new XMLHttpRequest();
         ajax.open("POST", "../php/envia_reservacion.php", true);
         ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          ajax.onreadystatechange = function(){
             if(ajax.status == 200 && ajax.readyState == 4){

                alert(ajax.responseText);

              }
         }
         ajax.send(parametros);
       }


       function cambiar(){
  document.getElementById('data').innerHTML = CKEDITOR.instances['editor1'].getData();
}

function envia_promo_correo(){

  var correo = CKEDITOR.instances['editor1'].getData();

  var parametros = "correo="+correo;
  parametros = parametros.split("<p>&nbsp;</p>").join(" <br> ");
  manda_promo_correo(parametros);
}

function manda_promo_correo(parametros){
        var ajax = new XMLHttpRequest();
         ajax.open("POST", "../../php/envia_promo_correo.php", true);
         ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          ajax.onreadystatechange = function(){
             if(ajax.status == 200 && ajax.readyState == 4){

                alert(ajax.responseText);

              }
         }
         ajax.send(parametros);
       }


function envia_confirmacion_correo(){
  var correo = document.getElementById("correo").value;
  var cuerpo = CKEDITOR.instances['editor1'].getData();
  var parametros = "correo="+correo+"&cuerpo="+cuerpo;//+"&receptor="+receptor;
  parametros = parametros.split("<p>&nbsp;</p>").join(" <br> ");
 manda_correo_personal(parametros);
}

function manda_correo_personal(parametros){
  var ajax = new XMLHttpRequest();
         ajax.open("POST", "../../php/confirma_cancela_reservacion.php", true);
         ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          ajax.onreadystatechange = function(){
             if(ajax.status == 200 && ajax.readyState == 4){
                alert(ajax.responseText);
              }
            }
        ajax.send(parametros);
}





//-----------------------------------------------------------------------------
// reservaciones.html


/*
* funcion que hace una peticion via ajax
* para brindar la imformacion de las reservaciones
*/
function generaHojas(){
        var fecha = document.getElementById("calendario_reservacion").value;
        //Hacer validacion de la fecha
        fecha = fecha.replace(new RegExp(/-/g),"/");
        if(fecha === ""){
          document.getElementById("error_busqueda").innerHTML = "Debes introducir una fecha válida.";
          return;
        }
        //alert(fecha);
        limpiaDiv("error_busqueda");
        var ajax = new XMLHttpRequest();
         ajax.open("POST", "../../php/genera_Hojitas.php", true);
          ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          ajax.onreadystatechange = function(){
             if(ajax.status == 200 && ajax.readyState == 4){
                document.getElementById('reservaciones').innerHTML = ajax.responseText;
              }
            }
        ajax.send("fecha="+fecha);
       }


/*
* Funcion para confirmar y cancelar la reservacion,
* id es el id de la reservacion en la base de datos
*/
function confirma(id){

  var ajax = new XMLHttpRequest();
         ajax.open("POST", "../../php/obtenReservacion_id.php", true);
          ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          ajax.onreadystatechange = function(){
             if(ajax.status == 200 && ajax.readyState == 4){

                window.location.href ="../../html/administrador/confirma_reservacion.php?"+encodeURIComponent(ajax.responseText);


              }
            }
  ajax.send("id_reservacion="+id);

}



function cancela(id){
  var ajax = new XMLHttpRequest();
         ajax.open("POST", "../../php/obtenReservacion_id.php", true);
          ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          ajax.onreadystatechange = function(){
             if(ajax.status == 200 && ajax.readyState == 4){

                window.location.href ="../../html/administrador/confirma_reservacion.php?"+encodeURIComponent(ajax.responseText);


              }
            }
  ajax.send("id_reservacion="+id);
}


//-------------------------------------------------------------------------------

function pidePromociones(){
  var ajax = new XMLHttpRequest();
         ajax.open("POST", "../../php/obtenPromociones.php", true);
          ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          ajax.onreadystatechange = function(){
             if(ajax.status == 200 && ajax.readyState == 4){


              window.location.href ="../../html/administrador/administra_promociones.php?"+encodeURIComponent(ajax.responseText);

              }
            }
  ajax.send();
}



function cerrarSesion(){
  var ajax = new XMLHttpRequest();
         ajax.open("POST", "../../html/administrador/salir.php", true);
          ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          ajax.onreadystatechange = function(){
             if(ajax.status == 200 && ajax.readyState == 4){
               window.location.href ="../../../home.html";
              }
            }
  ajax.send();
}


function inserta_promocion(){
alert("Insertaste una promocion");

}


function estado(id){
alert("Insertaste una promocion" + id );

}

function elimina(id){
alert("Insertaste una promocion" + id );

}
