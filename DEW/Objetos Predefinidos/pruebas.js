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
anel) { // Mozilla Firefox Bookmark
    window.sidebar.addPanel(document.title, window.location.href, '');
  }
  if (navigator.appName == "Netscape")
    alert("Presione Crtl+D para agregar este sitio en sus Bookmarks");

  if (navigator.appName == "Google Chrome")
    alert("Presione Crtl+D para agregar este sitio en sus Bookmarks");
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
