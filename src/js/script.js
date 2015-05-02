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

function envia_reservacion(){

  var nombre = document.getElementById("nombre").value;
  var telefono = document.getElementById("telefono").value;
  var correo = document.getElementById("correo");
  var dia = document.getElementById("dia_reservacion"); 
  var hora_llegada = document.getElementById("hora_llegada");
  var hora_salida = document.getElementById("hora_salida");
  var n_personas = document.getElementById("n_personas");

  var parametros = "nombre="+nombre+"&telefono="+telefono;
  mandaReservacion(parametros);
}

function mandaReservacion(parametros){
          var ajax = new XMLHttpRequest();
         ajax.open("POST", "../php/envia_reservacion.php", true);
         ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          ajax.onreadystatechange = function(){
              if(ajax.status == 200 && ajax.readyState == 4){
                
                alert(ajax.responseText);

              } else {
                  alert("No hay conexión");
              }
         }
         ajax.send(parametros);
       }
