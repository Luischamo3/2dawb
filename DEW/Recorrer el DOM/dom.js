//Recorrer el DOM Actividad 1

var listanodos = document.getElementsByTagName('div');
//nodelist[0] = document.getElementsByTagName('p');

var primerhijo = listanodos[0].firstChild;
var ultimohijo = listanodos[0].lastChild;
var siguientehijo = listanodos[0].nextSibling;
var hijoanterior = listanodos[0].previousSibling;
var nodopadre = listanodos[0].parentNode;
var nodoshijos = listanodos[0].childNodes;

/*var text = "";
for (i = 0; i < listanodos.length; i++) {
    //text += nodelist.elements[i].value + "<br>";
   
    
}*/
//Modificando los nodos
var contenido = document.getElementsByTagName('p')[0].childNodes[0].nodeValue;
document.getElementsByTagName('p')[0].childNodes[0].nodeValue = "lUIS";

listanodos[0].nodeValue;

//Manipular el DOM

//Agregar un nodo
var agregar = document.createElement("H3");
agregar.textContent = "Soy un nodo agregado";
listanodos[0].appendChild(agregar);

//Agregar un nodo después.

var agregardespues = document.createElement("H3");
agregar.textContent = "Soy un nodo insertado con before";
//document.insertBefore(agregardespues,listanodos[0]);

var borrarhijo = listanodos[0].getElementsByTagName('H3');

borrarhijo.removeChild(borrarhijo);





