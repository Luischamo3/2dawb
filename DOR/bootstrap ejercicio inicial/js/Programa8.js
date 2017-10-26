/*Un alumno realizó una prueba. Se obtuvo la siguiente información: nombre del alumno,
 cantidad total de preguntas que se le realizaron y cantidad de preguntas que contestó correctamente.
  Se pide crear una(s) función(es) JS que lea los datos del estudiante,
  informe el nivel del mismo según el porcentaje de respuestas correctas que ha obtenido, y sabiendo que:
Nivel A: Porcentaje>=85%.
Nivel B: Porcentaje>=70% y <85%.
Nivel C: Porcentaje>=50% y <70%.
Nivel D: Porcentaje<50%.
Deberás mostrar en la consola un mensaje indicando los datos del estudiante y el nivel del alumno.
El mensaje en la consola aparecerá como "log" si es nivel A,
 "info" si es nivel B, "warning" si es nivel C y "error" para nivel D
Igual que lo anterior pero añadiendo a la web los datos del alumno con formato H2 y el nivel en H1*/


function evaluator(){

  var namealu = prompt("Introduce tu nombre");


  var nquestion = prompt("Preguntas totales");
  var correctquestions = prompt("Preguntas Acertadas");

  var Porcent = (correctquestions * 100)/nquestion;

  if (!/^([0-9])*$/.test(nquestion) ){
          alert("El valor " + nquestion + " no es un número");
          return ;}
  if (!/^([0-9])*$/.test(correctquestions) ){
          alert("El valor " + correctquestions + " no es un número");
          return ;}

  if(Porcent <= 50){
    alert("El alumno tiene Nivel D");
    console.error("El alumno es de nivel D");
  }
  if(Porcent > 50 && Porcent <= 70){
    alert("El alumno tiene el Nivel C");
    console.warning("El alumno es de nivel C");
  }
  if(Porcent > 70 && Porcent <= 85)
  {
    alert("El alumno tiene el Nivel B");
    cosole.info("El alumno es de nivel b");

  }
  if(Porcent > 85){
    alert("El alumno tiene el Nivel A");
    console.log("El alumno es de nivel A");
  }
  alert("El alumno ha contestado un " + Porcent.toFixed(2) + " por ciento de preguntas bien");


}
