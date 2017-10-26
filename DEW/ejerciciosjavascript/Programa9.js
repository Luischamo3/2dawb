/*Crear una función que reciba un caracter (por ejemplo el *) y un número.
Esta función debe escribir un triángulo formado por esa letra,
que tenga como anchura inicial la que se ha indicado en el número.
Por ejemplo, si la letra es * y la anchura es 4, debería mostrar lo siguiente:
****
 ***
  **
   **/
// function draw(columns,total_rows,rows){
//    var columns;
//    var caract= prompt("Introduzca el caracter");
// var total_rows = prompt("Introduzca un número");
// var rows = total_rows;
//
//
// while (rows > 0) {
//   //Pintamos los asteriscos de la línea
//   rows--;
//
//   columns = total_rows- rows;
//
// while (columns > 0) {
//
//    document.write(caract+ "\n");
//    columns--;
//      }
//
// document.write(caract);
//  }
// }
function draw(base,caract){
// j columnas, i = rows

var caract=prompt("Introduce el símbolo");
//var espacio="-";
var base =prompt("Introduce el tamaño");

  for (i=base; i<0; i++){
      for (j=0; j>=i; j--){

              document.write(caract);
      }
        document.write( "<br /> ");

    }
}
 );
        document.write("     " );
    }
}

//draw();
