
var contenedor = document.getElementById('container');
var formulario = document.createElement("form");
var tablero = document.createElement('table');
tablero.setAttribute("id", "mitablero");
tablero.setAttribute("style", "border:5px solid black");
var oldnode = document.getElementById('mitablero');
var space = document.createElement("br");
var rows = 0;
var columns = 0;
var fila = "";
var count = 0;


function CreateOptions() {

    formulario.setAttribute("id", "myForm");
    document.body.appendChild(formulario);
    // Crear un boton
    var bt = document.createElement("input");
    //var name = document.createTextNode("Enviar");    
    bt.setAttribute("type", "button");
    bt.setAttribute("onclick", "LoadTable();");
    bt.setAttribute("value", "Enviar");
    formulario.appendChild(bt);
    formulario.appendChild(space);
    formulario.appendChild(space);

    var bt1 = document.createElement("input");
    bt1.setAttribute("type", "button");
    bt1.setAttribute("class", "l");

    bt1.setAttribute("value", "Reset");
    formulario.appendChild(bt1);


    // Caja para Las filas
    var box = document.createElement("input");
    box.setAttribute("title", "Ancho");
    box.setAttribute("id", "nfila");
    box.setAttribute("type", "text");
    formulario.appendChild(box);


    // Caja para las columnas
    var box1 = document.createElement("input");
    box1.setAttribute("title", "Alto");
    box1.setAttribute("id", "columna");
    box1.setAttribute("type", "text");
    formulario.appendChild(box1);


    var area = document.createElement("textarea");
    formulario.appendChild(area);
    WriteData();
}


function LoadTable() {
    columns = document.getElementById('columna').value -1;
    rows = document.getElementById('nfila').value -1;
    // mayor que cero ya que si está vacio será -1 por defecto
    if (columns >= 0 ) {
        for (var f = 0; f < columns; f++) {
            fila = document.createElement('tr');
            for (var i = 0; i <= rows; i++) {
                var celda = document.createElement('td');
                celda.innerHTML = count;
                count++;
                fila.appendChild(celda);
                celda.setAttribute("style", "border:2px solid black");
                celda.querySelectorAll('td:nth-child(3');
            }
            tablero.appendChild(fila);
        }
        formulario.appendChild(tablero);
        WriteData();
        //CleanTable();
    }
    alert("Uno de los campos está vacio o su valor es incorrecto");
}

function CleanTable() {
    for (var f = 0; f < columns; f++) {
        fila = document.createElement('tr');
        for (var i = 0; i <= rows; i++) {
            var celda = document.createElement('td');
            celda.innerHTML = " ";
            count++;
            fila.appendChild(celda);

        }
        tablero.appendChild(fila);
    }
    formulario.appendChild(tablero);
    //tablero.removeChild(oldnode.childNodes[0]);
    WriteData();

}


//Escribe el formulario en el div Container cada vez que se realiza se introduce un nodo
function WriteData() {
    document.getElementById('container').appendChild(formulario);
}






