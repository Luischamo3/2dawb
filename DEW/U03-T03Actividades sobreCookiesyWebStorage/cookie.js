
function getCookie(name){
	var index = document.cookie.indexOf(name + "=");
	if(index == -1) return null;
	index = document.cookie.indexOf("=", index) +1;
	var endStr = document.cookie.indexOf(";", index);
	if(endStr == -1)
		endStr = document.cookie.length;
	return decodeURIComponent(document.cookie.substring(index, endStr));
}

function setCookie(name, value, days){
	var expdate = new Date();
	expdate.setTime(expdate.getTime() + days * 24 * 60 * 60 * 1000);
	document.cookie = name +"="+ encodeURIComponent(value)+";expires=" + expdate.toUTCString();
}

function deleteCookie(name) {
	if(getCookie("counter")){
		document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GTM;";
		console.log("Se ha borrado correctamente.");
	}
	else
		console.log("No se ha podido borrar");
}

function fixDate(date) {
	var base = new Date(0)
	var skew = base.getTime()
	if (skew > 0)
		date.setTime(date.getTime() - skew)
}

function Cookies(){
	var now = new Date()
	fixDate(now)
	now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000)
	var visits = getCookie("counter")
	var x = getCookie("color");
	if (!visits){
		visits = 1;
		x = prompt("Introduzca un color: ");
		setCookie("color", x);
	}

	else{
		visits = parseInt(visits) + 1;
		document.body.style.backgroundColor = x;
	}

	setCookie("counter", visits, now)
	document.getElementById("cookies").innerHTML = ("Esta es tu visita numero: " + visits + " a la hora: " + now);
	console.log("Esta es tu visita numero: " + visits);
}
