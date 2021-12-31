alert ("hola mundo");

var nombre ="santiago";
var altura = "178";
var concatenacion = nombre+""+altura;

var datos = document.getElementById("datos");
datos.innerHTML=concatenacion;




let nombres;

nombres =prompt ("introduce  tus nombres");

if (nombres != null ){

document.write("bienvenido/a mi  sitio " + nombres);

}else{
alert("no has introducido nada,por favor recarga");

}

