var formulario = document.createElement("form");
var tablero = document.createElement('table');
var fila ="";
var twith = 20;
var count = 0;

for (var f = 0; f < 5; f++) {
fila = document.createElement('tr');
    for (var i = 0; i <= 30; i++) {
        var celda = document.createElement('td');
        celda.innerHTML = count;
        count++;
        fila.appendChild(celda);
    }    
    tablero.appendChild(fila);    
}
formulario.appendChild(tablero);
function createbutton() {

    formulario.setAttribute("id", "myForm");
    document.body.appendChild(formulario);
    // Crear un boton
    var bt = document.createElement("button");
    var name = document.createTextNode("Enviar");
    bt.setAttribute("type", "submit");
    bt.appendChild(name);
    formulario.appendChild(bt);

    var bt1 = document.createElement("input");
    var name1 = document.createTextNode("Reset");
    bt1.setAttribute("type", "reset");
    bt1.setAttribute("class", "l");
    bt1.setAttribute("value", "reset");
    bt1.appendChild(name1);
    formulario.appendChild(bt1);
    // Caja
    var bt1 = document.createElement("input");
    var name1 = document.createTextNode("Reset");
    bt1.setAttribute("type", "text");
    bt1.appendChild(name1);
    formulario.appendChild(bt1);



    var area = document.createElement("textarea");
    formulario.appendChild(area);
}




