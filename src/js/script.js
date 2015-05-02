function validarNumerosCantidad(e) { // 1
        tecla = (document.all) ? e.keyCode : e.which; // 2
        if (tecla==8) return true; // backspace
        if (tecla==190) {return true} ;
        if (tecla>=96 && tecla<=105) { return true;} //numpad

        patron = /[0-9]/; // patron

        te = String.fromCharCode(tecla);
        return patron.test(te); // prueba
    }

    function validarNumeros(e) { // 1
        tecla = (document.all) ? e.keyCode : e.which; // 2
        if (tecla==8) return true; // backspace
        if (tecla>=96 && tecla<=105) { return true;} //numpad

        patron = /[0-9]/; // patron

        te = String.fromCharCode(tecla);
        return patron.test(te); // prueba
    }

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
                window.location.href = "../html/administrador/reservaciones.html" ;
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
                  window.location.href = "../html/reservaciones.html" ;
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
  var hora_llegada = document.getElementById("hora_llegada").value;
  var hora_salida = document.getElementById("hora_salida").value;
  var n_personas = document.getElementById("n_personas").value;


  if(nombre == "") {
    mandaError("error_form", "Debes proporcionar un nombre");
    return;
  }

  if(!validaTelefono(telefono)){
    mandaError("error_form","Debes proporcionar un teléfono váildo");
    return;
  }
  
  if(!validaCorreo(correo)){
    mandaError("error_form","Poporciona un correo valido");
    return;
  }
  /*
  if(!validaDia(dia)){

  }
  if(!validaHora(hora_llegada)){

  }
  if(!validaHora(hora_salida)){

  }
  */
  if(n_personas == ""){
    mandaError("error_form","Debes proporcionar un # váildo");
    return;
  }
  if(n_personas <= 0){
    mandaError("error_form","AL menos debe haber alquien en la reservacion ");
    return;
  }

  limpiaDiv("error_form");
  return;
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
function envia_reservacion(){



  var parametros = "nombre="+nombre+"&telefono="+telefono+"&correo="+correo+"&dia="+dia+"&hora_llegada="+hora_llegada+"&hora_salida="+hora_salida+"&n_personas="+n_personas;
  mandaReservacion(parametros);
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
