/*Solicitar que el usuario escriba alguna de
 estas cuatro palabras (profesor, manzana, servidor, mar)
  para luego mostrar la palabra traducida en inglés.
   Es decir, si se ingresa 'mar' debemos mostrar el texto 'sea'
   en la página.
Solo se admiten estas palabras
 como entradas permitidas.*/

function dictionary(word){
  // Creamos una lista que contiene las palabras
  var library = new Array();
  library = {profesor:"Teacher",manzana:"Apple",servidor:"Server",mar:"Sea"};
  var word = prompt("Introduzca una de las palabras Indicadas (profesor,manzana,servidor,mar)");

if (library[word]) {
  alert("La palabra "+ word + " significa " +library[word]);
}
else {
  alert("No has introducido una palabra indicada")
}

  }
