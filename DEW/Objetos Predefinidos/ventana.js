/*2. Debemos incluir un botón que abra una ventana inicial o padre
que genere otra ventana hija.
En la ventana inicial se ha de escribir la palabra "Original"
y en la ventana nueva o hija (que se abrirá a partir de la inicial)
debemos escribir la palabra "Nueva".
Esta ventana debe medir 250px de ancho por 150px de alto.
El título de la nueva ventana original ha de ser vuestro nombre y
apellidos y debe contener los siguientes elementos HTML:

h1 con  tu Nombre
h2 con  tu primer apellido
h3 con  la fecha actual  en  formato: dd-mm-aaaa
y  un selected  para elegir  tu isla canaria favorita
Al cerrar la ventana hija se debe cargar en la ventana padre la web de www.elpais.com*/

function ventanas(){


  var jspage =window.open("", "Luis Sanfiel", "width=250,height=150")
  jspage .document.writeln('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">')
  jspage .document.writeln("<html><head><title>Luis Ventana")
   jspage .document.writeln("</title></head>")
  jspage .document.writeln("<body>")
  jspage .document.writeln("<h1>Nueva")
  jspage .document.writeln("</h1>")
  jspage .document.writeln("<h1>Luis")
  jspage .document.writeln("</h1>")
  jspage .document.writeln("<h2>Sanfiel")
  jspage .document.writeln("</h2>")
  jspage .document.writeln("<h3>" + Date() )
  jspage .document.writeln("</h3>")
  jspage .document.writeln("<select> Selecciona Tu Isla Favorita <option value='La Palma'>La Palma</option><option value='Tenerfie'>Tenerfie</option><option value='Las Palmas'>Las Palmas</option>")
  jspage.document.writeln("</select>")
   jspage.document.writeln("</body>")
   jspage .document.close()





  var jshija =window.open("", "Luis Sanfiel", "width=250,height=150")
  jshija .document.writeln('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">')
  jshija .document.writeln("<html><head><title>Luis Ventana")
   jshija .document.writeln("</title></head>")
  jshija .document.writeln("<body>")
  jshija .document.writeln("<h1>Original")
  jshija .document.writeln("</h1>")
  jshija .document.writeln("<h1>Luis")
  jsphija.document.writeln("</h1>")
  jshija .document.writeln("<h2>Sanfiel")
  jshija .document.writeln("</h2>")
  jshija .document.writeln("<h3>" + Date() )
  jshija .document.writeln("</h3>")
  jshija .document.writeln("<select> Selecciona Tu Isla Favorita <option value='La Palma'>La Palma</option><option value='Tenerfie'>Tenerfie</option><option value='Las Palmas'>Las Palmas</option>")
  jshija.document.writeln("</select>")
  jshija.document.writeln("<input type='button'>")
   jshija.document.writeln("</body>")
   jshija .document.close()
}
