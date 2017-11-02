//Ocultar Mostrar Contenidos DOM



function cambiar(id) {
    if (document.getElementById) { //se obtiene el id
        var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
        el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
    }
}


function cambiar(seccion) {
    // Implementar aquí la función que se solicita (sustituir Xonclick por onclick)

}