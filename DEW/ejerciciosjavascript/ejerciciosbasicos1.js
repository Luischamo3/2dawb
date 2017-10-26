/*function tellfortune(nhijos,npadre,loc,prof){
prompt("Serás " + prof + " en " + loc + ", estarás casado con " + npadre + " y tendrás  " +nhijos+ " hijos. ");
}

tellfortune(5,"Luis","España","Informático");*/
// Programa que caldula la edad
//Document.getElementbyname(name)value
/*function calculateage(anaci,actu){
//var fa = document.getElementbyname
  var actu = prompt("Introduce la fecha actual");
  var anaci = prompt("Introduce tu fecha de nacimiento");

  while(anaci >= actu){
    confirm("Las fechas introducidas son erroneas.")
    var actu = prompt("Introduce la fecha actual");
    var anaci = prompt("Introduce tu fecha de nacimiento");
  }

  var resta = actu - anaci;
  alert("Tu edad actual es: " + resta  );
}

calculateage();*/

// Programa que calcula el café que beberemos en nuestra vida

function calculatecoffee(aactu,ncoffe,totalvida,totalCafe){
  const vida = 85;
  var eactu = document.getElementbyname("actual");
var actual = eactu.value;
  var ncoffee = document.getElementbyname("totaltazas");
  var numerocafe = ncoffee.value;
  var totalvida = vida - eactu ;
  var totalCafe = totalvida * (ncoffee * 365);

  alert ("El número tota de tazas es de: "+ totalCafe + " en " + totalvida + " años de vida" );
}
