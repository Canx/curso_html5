function dado() {
	return 1+Math.floor(Math.random()*6);
}

function imprimir_en(id, valor) {
	document.getElementById(id).innerHTML = valor;
}

function tirar_dados() {
    imprimir_en("dado1", dado());
	imprimir_en("dado2", dado());
}

function init() {
	var boton;
	boton = document.getElementById("boton");
	boton.onclick = tirar_dados;
}

window.onload = init;