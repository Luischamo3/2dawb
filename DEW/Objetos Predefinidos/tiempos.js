/*4. Se ha de añadir una nueva opción (botón)
que abra una ventana nueva en la que cada 5 segundos se
escribe tu nombre con un color diferente
 (se deben definir 10 colores diferentes).*/

 function crea_color_aleatorio(){
  var  hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F")
    var color_aleatorio = "#";
    var color_aleatorio= 0;
    var aleatorio=0;
    var posarray = 0;
    for (i=0;i<6;i++){
       posarray = aleatorio(0,hexadecimal.length)
       color_aleatorio += hexadecimal[posarray]
    }
    return color_aleatorio
 }


 function interval(){
    t=1;
    var color = crea_color_aleatorio();
    setInterval(function(){
        document.getElementById("testdiv").innerHTML=t++;
        // document.getElementById('fondo').style.background = color;
    },1000,"JavaScript");
}
