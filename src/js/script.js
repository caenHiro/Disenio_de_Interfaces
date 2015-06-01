
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
  var hora = document.getElementById("hora").value;
  var personas = document.getElementById("personas").value;


  if(nombre == "") {
    mandaError("error_form", "Debes proporcionar un nombre");
    return;
  }
  if(!isNaN(nombre)){
    mandaError("error_form", "Proporcione un nombre valido");
    return;
  }
  if(!validaTelefono(telefono)){
    mandaError("error_form","Debes proporcionar un teléfono válido");
    return;
  }

  if(!validaCorreo(correo)){
    mandaError("error_form","Proporciona un correo valido");
    return;
  }
//  if(!validaDia(dia))
  //  return;
  if(!validahora(hora,dia))
    return;



  var parametros = "nombre="+nombre+"&telefono="+telefono+"&correo="+correo+"&dia="+dia+"&hora="+hora+"&personas="+personas;
  mandaReservacion(parametros);

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
  var tem = tel;
  tem = tem.replace('/','');
  tem = tem.replace('-','');
  if((tem.length==10||tem.length==13||tem.length==8)&&!isNaN(tem))
  return true;
  else
  return false;
}

function validaDia(dia){
  var ano = dia.substring(0,4);
  var fecha = new Date();

  if(ano<fecha.getFullYear()||(ano==fecha.getFullYear()+1&&fecha.getMonth()==11)){
     mandaError("error_form","Proporciona un año valido");
     return false;
  }
  var mes = dia.substring(5,7);

  if(mes<fecha.getMonth()+1){
     mandaError("error_form","Proporciona un mes valido");
     return false;
  }

  var date = dia.substring(8);

  if(date<fecha.getDate()&&date<=daysInMonth(mes,ano)){
     mandaError("error_form","Proporciona un dia valido");
     return false;
  }
  return true;
}

function validahora(hora,dia){
  var fecha = new Date();
  var h = hora.substring(0,2);
  var date = dia.substring(8);

  if(h<=fecha.getHours()&&fecha.getDate()==date){
  mandaError("error_form","Proporciona una hora correcta");
  return false;
  }
  return true;
}

function daysInMonth(humanMonth, year) {
  return new Date(year || new Date().getFullYear(), humanMonth, 0).getDate();
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
                window.location.href ="../../home.html";
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
              window.location.href ="../../html/administrador/envia_correo.php";
                alert(ajax.responseText);

              }
         }
         ajax.send(parametros);
       }


function envia_confirmacion_correo(){

  var cuerpo = CKEDITOR.instances['editor1'].getData();
  var correo = document.getElementById("correo").innerHTML;
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
              window.location.href ="../../html/administrador/reservaciones.php";
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
        fecha = fecha;//.replace(new RegExp(/-/g),"/");
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
         ajax.open("POST", "../../php/obtenReservacionCancelada_id.php", true);
          ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          ajax.onreadystatechange = function(){
             if(ajax.status == 200 && ajax.readyState == 4){

                window.location.href ="../../html/administrador/cancela_reservacion.php?"+encodeURIComponent(ajax.responseText);


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

                document.getElementById('reservaciones1').innerHTML = ajax.responseText;


              }
            }
  ajax.send();
}



function pideReservacionPendiente(){
  var ajax = new XMLHttpRequest();
         ajax.open("POST", "../../php/obtenReservacionP.php", true);
          ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          ajax.onreadystatechange = function(){
             if(ajax.status == 200 && ajax.readyState == 4){

               document.getElementById('reservaciones1').innerHTML = ajax.responseText;
             // window.location.href ="../../html/administrador/reservaciones.php?"+encodeURIComponent(ajax.responseText);

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
  var dia_inicio = document.getElementById("dia_inicio").value;
  var dia_termino= document.getElementById("dia_termino").value;
  var titulo = document.getElementById("titulo").value;
  var cuerpo = document.getElementById("cuerpo").value;
   var parametros = "dia_inicio="+dia_inicio+"&dia_termino="+dia_termino+"&titulo="+titulo+"&cuerpo="+cuerpo;
  mandaPromo(parametros);

}


function mandaPromo(parametros){
  var ajax = new XMLHttpRequest();
         ajax.open("POST", "../../php/insertaPromo.php", true);
         ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          ajax.onreadystatechange = function(){
             if(ajax.status == 200 && ajax.readyState == 4){
              window.location.href ="../../html/administrador/administra_promociones.php";

                alert(ajax.responseText);

              }
            }
        ajax.send(parametros);
}




function estado(id){

  var ajax = new XMLHttpRequest();
         ajax.open("POST", "../../php/cambiaEstadoPromo.php", true);
          ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          ajax.onreadystatechange = function(){
             if(ajax.status == 200 && ajax.readyState == 4){
              window.location.href ="../../html/administrador/administra_promociones.php";
              alert(ajax.responseText);
              }
            }
  ajax.send("id="+id);
  }

function elimina(id){

  var ajax = new XMLHttpRequest();
         ajax.open("POST", "../../php/eliminaPromo.php", true);
          ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          ajax.onreadystatechange = function(){
             if(ajax.status == 200 && ajax.readyState == 4){
              window.location.href ="../../html/administrador/administra_promociones.php";
              alert(ajax.responseText);
              }
            }
  ajax.send("id="+id);

}


function eliminaReservacion(id){

  var ajax = new XMLHttpRequest();
         ajax.open("POST", "../../php/eliminaReservacion.php", true);
          ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          ajax.onreadystatechange = function(){
             if(ajax.status == 200 && ajax.readyState == 4){
              window.location.href ="../../html/administrador/reservaciones.php";
              alert(ajax.responseText);
              }
            }
  ajax.send("id="+id);

}
