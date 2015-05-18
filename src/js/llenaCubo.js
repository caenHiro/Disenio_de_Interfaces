window.onload = function () {
    /*var url = document.location.href;

     params = url.split('?')[1];

     document.getElementById('girando').innerHTML = decodeURIComponent(params);*/

var ajax = new XMLHttpRequest();

         ajax.open("POST", "src/php/obtenPromosCubo.php", true);

          ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          ajax.onreadystatechange = function(){
             if(ajax.status == 200 && ajax.readyState == 4){
              document.getElementById('girando').innerHTML = ajax.responseText;
              }
            }
  ajax.send();
}
