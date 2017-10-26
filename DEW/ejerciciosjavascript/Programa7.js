/*Solicitar al usuario el día, mes y año de nacimiento.
En función de estos datos mostrar al usuario su edad.*/

function Calculateage(birtyear, birtmonth, birtday,currentyear,currentmonth,currentday,d){
//valores actuales
  var currentdate = new Date();

          var currentyear = currentdate.getFullYear();
          var currentmonth = currentdate.getMonth()+1;
          var currentday = currentdate.getDate();
//Validaciones de días mes y año
  var birtyear = prompt("Introduzca el año");
  while (birtyear >= currentyear)
    var birtyear = prompt("Introduzca el año");

  var birtmonth = prompt("Introduzca mes");
  while(birtmonth > 12 || birtmonth <1)
    var birtmonth = prompt("Introduzca mes");


  var birtday = prompt("Introduzca dia");
  while(birtday > 31 || birtday<1)
    var birtday = prompt("Introduzca dia");


  var age = currentyear  - birtyear;

  if ( currentmonth < birtmonth )
        {
            age--;
        }

  if ((birtmonth == currentmonth) && (currentday < birtday))
       {
           age--;
       }
       // Calculamos los meses

       var months=0;
       if(currentmonth>birtmonth)
           months=currentmonth - birtmonth;
           alert("Tu cumpleaños ya ha sido");
       if(currentmonth<birtmonth)
           months=12-(birtmonth - currentmonth);
       if(currentmonth==birtmonth && birtday>currentday)
      //  var d = 1;
      //    alert("Tu cumpleaños ha sido hace " + d + " días " );
           months=11;

           // calculamos los dias
         var days=0;
         if(currentday>birtday)
             days=currentday- birtday;
         if(currentday<birtday)
         {
             lastdaymonth=new Date(currentyear, currentmonth, 0);
             days=lastdaymonth.getDate()-(birtday- currentday);
         }

        //  var m = currentmonth - birtmonth;
        //  var d = currentday - birtday;
        //   alert("Tu cumpleños es en " + m +" meses y " + d + " días" )


         alert("Tienes un eda de " + age + " años de vida " + months + " meses y " + days + " días de vida");


}
