window.onload = function () {
    var url = document.location.href;

     params = url.split('?')[1];

     document.getElementById('girando').innerHTML = decodeURIComponent(params);
}