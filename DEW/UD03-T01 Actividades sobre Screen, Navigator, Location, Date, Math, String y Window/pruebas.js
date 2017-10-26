/*Al cargarse la página se debe mostrar un aviso, mediante un alert, donde se muestre la resolución de pantalla que tenemos (evento onload).
En el cuerpo de la página, y como primer elemento,
 un apartado en el que se muestren las propiedades del navegador (objeto navigator y sus propiedades).
 Se debe indicar qué navegador se está usando para visitar la página.
 /*Como segundo apartado, se deben de mostrar el protocolo, puerto, URL de la página y plugins instalados. */



function resolucion() {

  alert("Tu resolución de pantalla es " + screen.width + " x " + screen.height);
  alert("El nombre de tu navegador es " + navigator.appName);
  alert("URL: " + location.href + "Puerto: " + location.port + "Plugins: " + navigator.plugins);

}

//Función que calculas los días y valida la fecha;
function isValidDate(day, month, year) {
  var dteDate;
  month = month - 1;
  dteDate = new Date(year, month, day);
  return ((day == dteDate.getDate()) && (month == dteDate.getMonth()) && (year == dteDate.getFullYear()));
}

function validate_fecha(fecha) {
  var patron = new RegExp("^([0-9]{1,2})([/])([0-9]{1,2})([/])(19|20)+([0-9]{2})$");

  if (fecha.search(patron) == 0) {
    var values = fecha.split("/");
    if (isValidDate(values[1] - 1, values[0], values[2])) {
      return true;
    }
  }
  return false;
}

function calcularDias() {
  var currentdate = new Date();


  var fechaInicial = prompt("Introduzca la fecha");
  var fechaFinal = (currentdate.getMonth() + 1) + "/" + currentdate.getDate() + "/" + currentdate.getFullYear();

  if (validate_fecha(fechaInicial) && validate_fecha(fechaFinal)) {
    inicial = fechaInicial.split("/");
    final = fechaFinal.split("/");
    // obtenemos las fechas en milisegundos
    var dateStart = new Date(inicial[2], (inicial[1] - 1), inicial[0]);
    var dateEnd = new Date(final[2], (final[1] - 1), final[0]);
    if (dateStart < dateEnd) {
      // la diferencia entre las dos fechas, la dividimos entre 86400 segundos
      // que tiene un dia, y posteriormente entre 1000 ya que estamos
      // trabajando con milisegundos.
      
      resultado = "La diferencia es de " + (((dateEnd - dateStart) / 86400) / 1000) + " días";
    } else {
      resultado = "La fecha inicial es posterior a la fecha final";
    }
  } else {
    if (!validate_fecha(fechaInicial))
      resultado = "La fecha inicial es incorrecta";

  }
  alert(resultado);
}



function calculadora() {

  var a = prompt("Introduzca un Número");

  var b = prompt("Introduzca otro Número");

  var value1 = prompt("Introduzca el valor de un lado del triángulo: ");
  var value2 = prompt("Introduzca el valor otro lado del triángulo: ");
  // logaritmo neperiano (o en base "e") de "a"

  var logaritmo = "el logaritmo es: " + Math.log(a);

  // raíz cuadrada de "a",

  var raiz = "Raíz cuadradra del primer número es: " + Math.sqrt(a);

  //"a" elevado a "b",
  var potencia = "El resultado de a elevado a b es: " + Math.pow(a, b);

  //número entero más cercano y mayor a "b",
  var intcer = "El número entero más cercano y mayor a el segundo número: " + Math.ceil(b);
  //redondea al entero más próximo de "a"
  var intprox = "El número entero más cercano y menor a el primero número: " + Math.ceil(a);

  var redondea = "El numero entero redondeado mas proximo al primer numero elegido: " + Math.round(a);
  //crear un número aleatorio entre 0 y 1, número aleatorio entre "a" y "b",

  var numaleatorio = "El número aleatorio entre los introducidos: " + Math.random(a, b);


  //calcular las funciones trigonométricas: seno, coseno y tangente de "b" en radianes
  var trigonometricas = "El seno es: " + Math.sin(b) + "El coseno es: " + Math.cos(b) + "La tangente es: " + Math.tan(b);

  //valor absoluto de "a",
  var valorab = "El valor absoluto de a es: " + Math.abs(a);

  //valor máximo valor entre "a" y "b",
  var max = "El varlo máximo entre los números es de : " + Math.max(a, b);

  //mínimo valor de los dos ("a" y "b").
  var minimovalor = "El varlo mínimo entre los números es de : " + Math.min(a, b);

  //Pedir al usuario el valor de 2 lados de un triángulo. Calcular la hipotenusa de dicho triángulo  (suma de los cuadrados de ambos lados).


  var hypo = "El valor mínimo entre los números es de : " + Math.hypot(value1, value2);


  document.getElementById("text").innerHTML = logaritmo + "\n" + raiz + "\n" + potencia + "\n" + intcer + "\n" + intprox + "\n" + redondea + "\n" + numaleatorio + "\n" + trigonometricas + "\n" + valorab + "\n" + max + "\n" + minimovalor + "\n" + hypo;
  ///String

}


/*String
Desarrolla las siguientes funciones:

darlelavueltaCaracteres(arg_str): devolverá una cadena que contiene los caracteres de la cadena arg_str en orden inverso.
Por ejemplo, para darlelavueltaCaracteres("lagarto"), el valor devuelto será "otragal".*/

function darlelavueltaCaracteres(arg_str) {

  var x = arg_str.length;
  var cadenaInvertida = "";

  while (x >= 0) {
    cadenaInvertida = cadenaInvertida + arg_str.charAt(x);
    x--;
  }
  alert(cadenaInvertida);
}

/*darlelavueltaPalabras(arg_str): devolverá un string que contiene las palabras del string que recibe por argumento
y devuelve otro string pero con el orden inverso de las palabras.
Por ejemplo, si llamamos a la función darlelavueltaPalabras("El baifo canario tiene su propio mecanismo"),
esta devolverá "mecanismo propio su tiene canario baifo El".*/



function darlelavueltaPalabras(arg_str) {
  var split = arg_str.split(" ");
  var res = "";
  for (var i = split.length - 1; i >= 0; i--) {
    res += split[i] + " ";
  }

  alert(res);
}

/*laFrase(arg_str): esta función se utiliza para que una sentencia tenga la primera palabra en mayúscula y el resto en minúsculas.
Básicamente, quiere aprovechar el primer carácter de arg_str y obligar al resto a minúsculas.*/

function lafrase(arg_str) {

  alert(arg_str.charAt(0).toUpperCase() + arg_str.slice(1));

  //  document.getElementById('text').innerHTML = arg_str.big();


}

/*La salida de laFrase("i LOVE lA ProgramacióN EN eL LADO dEl ClienTe!") sería:
  I love la programación en el lado del cliente!
Pedir al usuario que introduzca una cadena y aplicar las tres funciones creadas,
mostrando el resultado en la página web que estamos creando.*/

function lafrase2(arg_str) {

  var arg_str = "i LOVE LA ProgramacióN EN eL LADO dEL ClienTe!";
  // lafrase(arg_str);

  alert(arg_str.toLowerCase());

 darlelavueltaPalabras(arg_str);

   darlelavueltaCaracteres(arg_str);

  //  document.getElementById('text').innerHTML = arg_str.big();

}

//agregar webs favoritas
function agregar() {
  if ((navigator.appName == "Microsoft Internet Explorer") && (parseInt(navigator.appVersion) >= 4)) {
    var url = "index.html";
    var titulo = " Descripcion de mi sitio web";
    window.external.AddFavorite(url, titulo);
  }
  if (window.sidebar && window.sidebar.addPanel) { // Mozilla Firefox Bookmark
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
