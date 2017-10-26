 /* Solicitar por teclado
mediante prompt un número positivo
 y mostrar un mensaje indicando el
  número de dígitos que contiene y
  la suma de cada uno de sus dígitos.
  Por ejemplo: 125, tendría tres dígitos
   y la suma de estos sería 8.*/


function longstring(digit) {
var digit = prompt("Introduzca una cantidad");

if (digit< 0) {

  alert("El número debe ser postivo");

}
else{
var sum=0;

        for(var i=0 , cont = 0;i<digit.length;i++ , cont ++)
        {
            sum+=parseInt(digit[i]);
        }
        alert("El resultado de la Suma de los valores de "+digit+" es: " +sum+ " y el número de dígitos es: "+cont);
      }
}

