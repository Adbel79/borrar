
function  boton4() {
    window.alert('enviar 4');
}
//definimos una variable la cual apunta a un elemento HTML identificado por su ID 
var botonEnviar1 =document.getElementById('btnenviar1');
botonEnviar1.style.color = "orange";
//se agrega listener (escucha) para cachar el evento click en el boton
//la accion que ocurrira al dar click la ejecutara una funcion anonima function(){}
botonEnviar1.addEventListener('click', function() {
    window.alert("enviar1");
    cambiarColor("red");
    cambiarEstado(true);
});

var emailHelp = document.getElementById('emailHelp');
function cambiarColor(color){
    emailHelp.style.color = color;
}

function cambiarEstado(estado){
    var ejemploChecar =document.getElementById('exampleCheck1').checked = estado;
}

var btnenviar5 = document.getElementById('botonEnviar5');
btnenviar5.addEventListener('click', callback);

function callback(){
    cambiarColor("blue");
    cambiarEstado(false);
}