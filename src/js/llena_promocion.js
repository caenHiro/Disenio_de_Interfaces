window.onload = function () {
    var url = document.location.href;

     params = url.split('?')[1].split('&');

     document.getElementById('reservaciones1').innerHTML = decodeURIComponent(params);
}
