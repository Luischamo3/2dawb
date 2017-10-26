function StringMultilinea() {

  var cadena = prompt("Introduzca una frase con espacio");

  cadena = cadena.split(" ");
  for (var x = 0; x < cadena.length; x++) {
    document.write(cadena = cadena[x] + "<br>");
  }
  // document.getElementById("text").innerHTML = cadena = cadena[x]+ "<br>";
}


/*3. Realizar un script en el que se muestre una ventana que contenga el nombre del
navegador que estemos usando para abrir el documento Web. Probar con distintos
navegadores para verificar el resultado.*/

function browsername() {

  //alert("Tu resolución de pantalla es " + screen.width + " x " + screen.height);
  alert("El nombre de tu navegador es " + navigator.appName);
  // alert("URL: " + location.href + "Puerto: " + location.port + "Plugins: " + navigator.plugins);

}


// Contar los elementos del formulario
function contarelementos() {
  var obj = document.getElementById("padre");
  var numero = obj.getElementsByTagName("a").length;
  alert(numero + " En laces");

  var obj = document.getElementById("padre2");
  var numero = obj.getElementsByTagName("input").length;
  alert(numero + "  Cajas");

  var obj = document.getElementById("padre3");
  var numero = obj.getElementsByTagName("img").length;
  alert(numero + " Imágenes");

  var obj = document.getElementById("padre4");
  var numero = obj.getElementsByTagName("button").length;
  alert(numero + " Botones ");

}

function estilo(){
var txt = "generado desde js un texto con distinto formato";
document.write("<p>Enlace " + txt.link("http://Pruebas.html")+ "</p>");

document.write("<p>Enlace " + txt.link("http://Pruebas.html")+ "</p>");
document.write("<p>Con un tamaño de fuente de 5px " + txt.small()+ "</p>");
document.write("<p>Escriben superíndices " + txt.sup()+ "</p>");
document.write("<p>Escriben subindices " + txt.sub()+ "</p>");
document.write("<p>Le damos formato cursiva " + txt.italics()+ "</p>");
document.write("<p>y por último, algo de color " + txt.fontcolor("red")+ "</p>");
document.write("<p>y por último, algo de color y cursiva " + txt.fontcolor("red").italics()+ "</p>");
}
