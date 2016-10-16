/*===funcion para desplegar menus===*/

$(document).ready(
  function () {
    $('.nav li').hover(
      function () { 
        $('ul', this).fadeIn();
      },
      function () { 
        $('ul', this).fadeOut();
      }
    );
  }

  function corregir(){
var p1
var p2
var p3
var aciertos = 0
var fallos = 0
var blancos = 0
var nota
var notaFinal
<!-- 1º pregunta-->
if (document.getElementById('p11').checked==true) {
   p1 = 1;
   aciertos++;
}else if (document.getElementById('p12').checked==true){
      p1 = -0.5;
         fallos++;
}else if (document.getElementById('p13').checked==true){
      p1 = -0.5;
        fallos++;
}else if (document.getElementById('p14').checked==true){
      p1 = -0.5;
         fallos++;
}else{
      p1= -0.1;
      blancos++;
      }
      
<!-- 2º pregunta-->
if (document.getElementById('p21').checked==true) {
   p2 = 1;
   aciertos++;
}else if (document.getElementById('p22').checked==true){
      p2 = -0.5;
         fallos++;
}else if (document.getElementById('p23').checked==true){
      p2 = -0.5;
         fallos++;
}else if (document.getElementById('p24').checked==true){
      p2 = -0.5;
         fallos++;
}else{
      p2= -0.1;
      blancos++;
         }
      
<!-- 3º pregunta-->
if (document.getElementById('p31').checked==true) {
   p3 = 1;
   aciertos++;
}else if (document.getElementById('p32').checked==true){
      p3 = -0.5;
         fallos++;
}else if (document.getElementById('p33').checked==true){
      p3 = -0.5;
        fallos++;
}else if (document.getElementById('p34').checked==true){
      p3 = -0.5;
         fallos++;
}else{
      p3= -0.1;
      blancos++;
      }
      
nota = p1+p2+p3;
if(nota<0){
puntuacion = 0;
}else{
puntuacion = nota;
}


[COLOR="Red"]document.getElementById('aciertos').value = aciertos;
document.getElementById('fallos').value = fallos;
document.getElementById('blancos').value = blancos;
document.getElementById('puntuacion').value = puntuacion;[/COLOR]
}


//intervalo tiempo cambio img slide, 5 segundos, se llama a la función "avanzaSlide()"
setInterval('avanzaSlide()',5000);
 
//array con las clases para las diferentes imagenes
var arrayImagenes = new Array(".img1",".img2",".img3");
 
//variable que nos permitirá saber qué imagen se está mostrando
var contador = 0;
 
//hace un efecto fadeIn para mostrar una imagen
function mostrar(img){
  $(img).ready(function(){        
      $(arrayImagenes[contador]).fadeIn(1500);    
  });
}
 
//hace un efecto fadeOut para ocultar una imagen
function ocultar(img){
  $(img).ready(function(){        
      $(arrayImagenes[contador]).fadeOut(1500);   
  });
}
 
//función principal
function avanzaSlide(){
        //se oculta la imagen actual
  ocultar(arrayImagenes[contador]);
        //aumentamos el contador en una unidad
  contador = (contador + 1) % 3;
        //mostramos la nueva imagen
  mostrar(arrayImagenes[contador]);
}

);

