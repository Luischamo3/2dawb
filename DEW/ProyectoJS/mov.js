var Turn = true;
var x = "!";//tortuga
function alternative(){
    if(Turn){
        dadoTurtle();
        Turn = false;
        return;
    }
    if(!Turn){
        dadoRabbit();
        Turn = true;
        return;
    }
}

function dadoTurtle(){
    var P = Math.floor((Math.random() * 10) + 1);
    if(P > 1 && P <= 50){
        //move 3Position Right
        var s = " ";
        for(i = 3; i > 0; i--){
            s = (s + x);
            document.getElementById("turtle").innerHTML = x + s;

        }
        console.log(x);
        console.log("Tortuga: Me estoy moviendo a la Derecha 3 posiciones!.");

    }

    if(P > 50 && P <= 70){
        //6Position Left
        for(i = 6; i > 0; i--){
            x = (x - " ");
            var con =
            document.getElementById("turtle").innerHTML = x + s;

        }
        console.log(x);
        console.log("Tortuga: Me estoy moviendo a la Izquierda 6 posiciones!.");
    }

    if(P > 70 && P <= 100){
        //1Position Right
        var s = " ";
        for(i = 1; i > 0; i--){
            s = (s + x);
            document.getElementById("turtle").innerHTML = x + s;

        }
        console.log(x);
        console.log("Tortuga: Me estoy moviendo a la Derecha 1 posición!.");
    }
}
function dadoRabbit(){
    var L = Math.floor((Math.random() * 100) + 1);
    if(L > 1 && L <= 20){
        //no mover
        console.log("Liebre: ESTOY DORMIDO!!!");
    }
    if(L > 20 && L <= 40){
        //9Right
        console.log("Liebre: Estoy moviendome a la Derecha 9 posiciones.");
    }
    if(L > 40 && L <= 50){
        //12Left
        console.log("Liebre: Estoy moviendome a la Izquierda 12 posiciones.");
    }
    if(L > 60 && L <= 80){
        //1Right
        console.log("Liebre: Estoy moviendome a la Derecha 1 posicion.");
    }
    if(L > 80 && L < 100){
        //2Left
        console.log("Liebre: Estoy moviendome a la Izquierda 2 posiciones.");
    }
}

function scene(){
    var L = ["-"];
    var x = L.length;
    var _L = "";
    for(i = 70; i > 0; i--){
        _L = _L + L;
        document.getElementById("line").innerHTML = _L;

    }
}
function tortugaMove(){
    //use random for the move the turtle.
    if(Turn){

    }
}

function rabbitMove(){
    //use random for the move the rabbit.
}
