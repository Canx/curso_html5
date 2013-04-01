function tirar_dados() {
    var tirada;

    tirada = 1+Math.floor(Math.random()*6);
    window.alert(tirada);
}


function init() {
	var boton;
	boton = document.getElementById("boton");
	boton.onclick = tirar_dados;
}

window.onload = init;