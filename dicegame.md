# Juego de dados

![dados](images/dados.jpg)

---

# Objetivos

* dibujar en el "canvas"
* programar la lógica del juego
* crear formularios 

# Presenter notes

canvas: dibujar lineas, incluir imagenes, poner texto de una forma mucho más libre que con HTML.
usado por la mayoría de juegos javascript.

programar: crear funciones (parecido a los grupos de bloques que recibian mensajes en scratch)
           tirar aleatoriamente un dado, funcion parecida a la de scratch.
       
---

# Reglas del juego: craps

1. Se tiran dos dados y se suman
    * GANAS: si sacas un 7 o 11 a la primera 
    * PIERDES: si sacas un 2, 3 o 12.
    * CONTINUAR: si sacas otra cosa.

2. Si continuas tiras otra vez
    * PIERDES: si sacas un 7
    * GANAS: si sacas lo mismo que en la ultima tirada
    * REPETIR: si sacas otra cosa

---

# Iteracion 1

* Objetivo

Mostrar un botón y al pulsar escribir el resultado de la tirada.

---

# Botones

    !html
    <button>Tira los dados</button>

# Presenter notes

Hacer interfaz básica y esqueleto html

# PROBLEMA: Tirar dados

Valor aleatorio entre 0 y 1:

    !js
    Math.random()

---

# PROBLEMA: Tirar dados

Redondea n hacia abajo:

    !js
    Math.floor(n)

---

# PROBLEMA: Tirar dados

Devuelve un valor entre 1 y 6:

    !js
    1+Math.floor(Math.random()*6)

---

# Variables

* Guardan valores: números, texto, objetos, funciones,... 
* Se declaran usando *var*
* Se inicializan con el operador *=*

# Presenter notes:

Hacer ejemplos de asignacion de numero y texto.

----

# Variables

Almacena la tirada en la variable "tirada":

    !js
    var tirada = 1+Math.floor(Math.random()*6);

---

# Funciones

POR HACER

---

# Eventos y funciones

POR HACER

# Presenter notes

Con lo anterior crear la funcion tirada, que a su vez llamará dos veces a la funcion tirar_dado y luego llamará a la función dibujar_dados.

---
# Condicionales: if

   !js
   if (condicion) {

   } 

---

# Condicionales: if

    !js
    if (condicion) {

    }
    else {

    }

---

# Condicionales: if

Ejemplos:

    !js
    if (edad > 18) {
        alert("Eres mayor de edad!");
    }
    else {
        alert("Aun eres menor de edad.");
    }
   
---

# Condicionales: switch

POR HACER

---

# Canvas

* Nos permite dibujar libremente
* Mediante javascript

---

# Canvas

Etiqueta canvas:

    !html
    <canvas id="canvas" width="400" height="300">
       Tu navegador no soporta el elemento canvas
    </canvas>

---

# Canvas

Obtener el objeto canvas desde javascript:

    !js
    var canvas;
    canvas = document.getElementById("canvas").getContext("2d");

# Canvas

Dibujar un cuadrado:

    !js
    canvas.strokeRect(100,50,200,300);

# Canvas

Dibujar un cuadrado con color y estilo:

    !js
    canvas.lineWidth = 5;
    canvas.strokeStyle = "rgb(255,0,0)";
    canvas.strokeRect(100,50,200,300);


