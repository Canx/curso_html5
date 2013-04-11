# Juego de dados

![dados](images/dados.jpg)

[![CC][1]][2]

[1]: images/cc.png
[2]: http://creativecommons.org/licenses/by-sa/3.0/

Ruben Cancho (2013 IES La Vereda)
---

# Contenidos

# Cosas que necesitaremos aprender para hacer el juego:

   * Variables -> almacenan objetos
   * Funciones -> contienen instrucciones
   * Eventos -> disparan funciones
   * Canvas -> permiten dibujar

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

# Eventos

## *acciones* que suceden en un *objeto* y disparan una *funcion*

## Ejemplo

apretar un botón y que se muestre un mensaje.

* accion -> pulsar 
* objeto -> boton 
* funcion -> mostrar mensaje

# Presenter notes

* Ejemplos de acciones
    * apretar un botón
    * mover el ratón sobre un elemento
    * cargar una página

---

# Evento onclick

    !js
    function mostrar_mensaje() {
        window.alert("hola");
    }

    var boton;
    boton = document.getElementById("boton");
    boton.onclick = mostrar_mensaje;

# Presenter notes

Un evento está asociado a un objeto.
Las etiquetas son objetos.
Todas las etiquetas que se pueden clicar tienen el evento onclick.
Asociamos una funcion a un evento.

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

# Funciones

* Que es una funcion?
    * *conjunto de instrucciones* que permiten resolver una tarea
    * Se puede llamar a la funcion desde otra parte del programa

---

# Funciones

* ## Para que sirven?
    * No "reinventar la rueda"
    * No repetir código
    * Más claridad y sencillez
    * Programas más fáciles de modificar

---

# Definicion de una funcion

    !js
    function nombreFuncion(parametro1, parametro2, ...) {
       var resultado; // variables locales

       ...
       return resultado; // retornar resultado
    }

#Presenter notes

    pueden tener parametros para realizar la tarea
    devuelven un resultado que puede guardarse en una variable
    podemos usar funciones dentro de funciones.

---

# Uso de una funcion

    !js
    var resultado;

    resultado = nombreFuncion(p1, p2);

---


# Tipos de funciones

* Funciones de la librería Javascript
    * Ejemplo: Date(), Math.random(), window.alert(msg)

* Funciones definidas por el usuario
    * function mifuncion() { ... }

# Presenter notes

    Podemos crear nuestrar propias funciones!

---

# Consejos prácticos sobre funciones

* Utilizarlas cuando repitas código
* Crear funciones que solo hagan una sola cosa
* Poner nombres claros a las funciones

---

# Práctica

* Tirar dos dados
* Imprimir el resultado en etiquetas
    * RECUERDA: getElementById()

---

# Práctica

* Reorganizar el código en funciones

# Presenter notes

Empezar con una gran funcion y ir refactorizando.

Resultado final despues de refactorizar

<pre>
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
</pre>

---

# Iteracion 2

* # Objetivo: Hacer el diseño más "cool"
* # Herramienta: CSS

---

# Cheatsheet CSS

# http://overapi.com/css/

---

# Cambiar el fondo

* IMÁGENES EN GOOGLE:

    * "Free Stock Photos"

---

# Cambiar el fondo

* DIRECTIVAS CSS
    * background-image
    * background-repeat
    * background-position
    * background-attachment
    * background-size

---

# Cambiar el fondo
    !css
    html {
       background-image: url(images/dices.jpg);
       background-repeat: no-repeat;
       background-position: center center;
       background-attachment: fixed;
       background-size: cover;
    }

# Presenter notes

Ir explicando cada directiva una por una, viendo las opciones en el cheatsheet y haciendo el ejemplo a continuación.

---   

# Cambiar el fondo

    !css
    html {
       background: url(images/dices.jpg) no-repeat center center fixed cover;
    }

# Presenter notes

Como agrupar todas las directivas.

---

# Actividad

1. Busca una imagen de fondo para el juego.
2. Aplica directivas "background"
    * las mismas ó
    * Experimenta tú mismo

---

# Fuentes tipo dados

* CSS
    * @font-face
    * font-family
    * font-size

# Presenter notes

Fuente que tiene caras de dados en vez de números
@font-face: Como utilizar una fuente en un archivo CSS
Como utilizar una fuente en una regla CSS

---

# Ejemplo fuentes

    !css
    @font-face {
        font-family: "Dice";
        src: url(dice.ttf) format("truetype");
    }

    p {
        font-family: "Dice";
        font-size: 40px;
    }

---

# Recuadro de juego

* DIRECTIVAS CSS
    * width
    * height
    * min-width
    * min-height

# Presenter notes

se puede aplicar a cualquier etiqueta
unidades en px, %, em

---

# Ejemplo
    !css
    h1 {
        width: 200px;
        height: 50px;
    }

---

# Borde del recuadro

* DIRECTIVAS CSS
    * border-color
    * border-style
    * border-width
    * border-radius

---

# Ejemplo

    !css
    div {
        border-color: Black;
        border-style: solid;
        border-width: thick;
        border-radius: 10px;
    }

# Presenter notes

selector de color
http://www.quackit.com/css/css_color_codes.cfm

---

# Fondo semitransparente

* DIRECTIVA CSS:
    * background-color: rgba(R,G,B,A);

---

# Ejemplo



# Botón más moderno

* [css3button.net](http://css3button.net/)

---

# POR HACER

---

# Iteracion 3

Objetivo: hacer la lógica del juego

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


