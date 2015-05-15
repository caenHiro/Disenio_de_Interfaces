window.onload = function () {
    var url = document.location.href,

        params = url.split('?')[1].split('&'),
    	document.getElementById('info_hojita').innerHTML = decodeURIComponent(params);

}
