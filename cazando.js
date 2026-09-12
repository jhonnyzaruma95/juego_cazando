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
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"green");
}

function graficarComida(){
    graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"red");
}

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle= color;
    ctx.fillRect(x,y,ancho,alto);

}

