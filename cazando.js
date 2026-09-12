let canvas=document.getElementById("areaJuego");
ctx=canvas.getContext("2d");

let gatoX=230;
let gatoY=200;
let comidaX=canvas.width-80/2;
let comidaY=canvas.height-80/2;

const ALTO_GATO=100;
const ANCHO_GATO=50;
const ALTO_COMIDA=40;
const ANCHO_COMIDA=40;




function iniciarJuego(){
    graficarGato();
    graficarComida();

}

function graficarGato(){
    ctx.fillStyle="green";
    ctx.fillRect(gatoX,gatoY,ANCHO_GATO,ALTO_GATO);
}

function graficarComida(){
    ctx.fillStyle="red";
    ctx.fillRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA);
}

