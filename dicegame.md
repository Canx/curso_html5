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

# Metodología de desarrollo

* Incremental
    * Añadimos funcionalidad poco a poco
    * Probamos cada cosa después de hacerla.
    * Organizamos el código para que quede más claro
 
* Iterativa
    * Versiones sucesivas que nos acercan al objetivo.
    * Cada version se construye sobre la anterior


--- 

# Iteracion 1

* ## Objetivo

## Mostrar un botón y al pulsar escribir el resultado de la tirada.

---

# Botones

## Como crear un botón

    !html
    <button>Tira los dados</button>

# Presenter notes

Mostrar chuleta HTML5
Hacer interfaz básica y esqueleto html

---

# PROBLEMA: Tirar dados

## Valor aleatorio entre 0 y 1

    !js
    Math.random()

---

# PROBLEMA: Tirar dados

## Redondea n hacia abajo

    !js
    Math.floor(n)

---

# PROBLEMA: Tirar dados

## Devuelve un valor entre 1 y 6

    !js
    1+Math.floor(Math.random()*6)

---

# Variables

* Guardan valores: números, texto, objetos, funciones,... 
* Se declaran usando *var*
* Se inicializan con el operador *=*

# Presenter notes

Hacer ejemplos de asignacion de numero y texto.

----

# Variables

## Almacena la tirada en la variable "tirada":

    !js
    var tirada = 1+Math.floor(Math.random()*6);

---

# Eventos

## *acciones* que suceden en un *objeto* y disparan una *funcion*

## Ejemplo

apretar un botón y que se muestre un mensaje.

* accion -> pulsar (evento onlick)
* objeto -> boton (objeto button)
* funcion -> mostrar mensaje (funcion alert("hola"))

# Presenter notes

* Ejemplos de acciones
    * apretar un botón
    * mover el ratón sobre un elemento
    * cargar una página

---

# Evento onclick

    !js
    var boton;
    boton = document.getElementById("boton");
    boton.onclick = alert("hola");

# Presenter notes

Un evento está asociado a un objeto.
Las etiquetas son objetos.
Todas las etiquetas que se pueden clicar tienen el evento onclick.
Asociamos una funcion a un evento.

---

# Tipos de funciones

* Funciones de la librería Javascript
    * Date();
    * alert(...);
    * Math.random(...);
    * Math.floor(...);

* Funciones definidas por el usuario

# Presenter notes

Podemos crear nuestrar propias funciones!

---

# Eventos y funciones

    !js
    function tirar_dados() {

    }    

    var boton;
    boton = document.getElementById("boton");
    boton.onclick = tirar_dados

# Presenter notes

tirar_dados es una funcion definida por el usuario.
El flujo del programa se empieza cuando se aprieta el botón, no cuando se carga la ventana (window.onload)

---

# Funciones

* Estructurar el programa en funciones
* Utilizar funciones que solo hagan una sola cosa
* Poner nombres claros a las funciones


# Presenter notes

Empezar con una gran funcion y ir refactorizando.

Resultado final despues de refactorizar

   !js
   function tirada() {
       var tirada;
       tirada = 1+Math.floor(Math.random()*6);
       return tirada;
   }

   function imprimir_en(id, valor) {
       var etiqueta;
       etiqueta = document.getElementById(id);
       etiqueta.innerHTML = valor;
   }

   function tirar_dados() {
       imprimir_en("dado1", tirada());
       imprimir_en("dado2", tirada());
   }

---

# Iteracion 2

Objetivo: Añadir la lógica del juego

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


