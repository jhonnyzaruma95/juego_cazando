let canvas=document.getElementById("areaJuego");
ctx=canvas.getContext("2d");


let gatoX,gatoY;
let comidaX,comidaY;

const ALTO_GATO=100;
const ANCHO_GATO=50;
const ALTO_COMIDA=40;
const ANCHO_COMIDA=40;


function iniciarJuego(){
    canvas.width=500;
    canvas.height=500;
    gatoX=(canvas.width-ANCHO_GATO)/2;
    gatoY=(canvas.height-ALTO_GATO)/2;
    comidaX=canvas.width-ANCHO_COMIDA;
    comidaY=canvas.height-ALTO_COMIDA;
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

function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function moverIzquierda(){
    gatoX=gatoX-10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
}

function moverDerecha(){
    gatoX=gatoX+10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
}

function moverArriba(){
    gatoY=gatoY-10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
}

function moverAbajo(){
    gatoY=gatoY+10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
}