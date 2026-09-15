let canvas=document.getElementById("areaJuego");
ctx=canvas.getContext("2d");

//Variables de posicion se van a mover
let gatoX,gatoY;
let comidaX,comidaY;
let puntos=0;

//Constantes de tamano nunca cambian 
const ALTO_GATO=100;
const ANCHO_GATO=50;
const ALTO_COMIDA=40;
const ANCHO_COMIDA=40;


function actualizarJuego(){
    limpiarCanvas();
    graficarGato();
    graficarComida();
}

function iniciarJuego(){
    canvas.width=500;
    canvas.height=500;
    gatoX=(canvas.width-ANCHO_GATO)/2;  //500-50/2=225
    gatoY=(canvas.height-ALTO_GATO)/2;  //500-100/2=200
    comidaX=canvas.width-ANCHO_COMIDA;  //500-40=460
    comidaY=canvas.height-ALTO_COMIDA;  //500-40=460
    graficarGato();
    graficarComida();
    aparecerComida();

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
    gatoX=gatoX-10;               //restar 10 a gatoX
    limpiarCanvas();              //limpiar todo
    graficarGato();               //dibujar gato
    graficarComida();             //dibujar comida-se borra al limpiar
    detectarColision();           //llama cuando se mueva
}

function moverDerecha(){
    gatoX=gatoX+10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverArriba(){
    gatoY=gatoY-10;                //en Y restar es subir
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverAbajo(){
    gatoY=gatoY+10;                //en Y sumar es bajar
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();
}

function detectarColision(){
    if (gatoX < comidaX + ANCHO_COMIDA &&
        gatoX + ANCHO_GATO > comidaX &&
        gatoY < comidaY + ALTO_COMIDA &&
        gatoY + ALTO_GATO > comidaY){
        //alert("!!EL GATO COMIO!!");
        
        puntos=puntos + 1;
        let componente=document.getElementById("puntos");
        componente.textContent=puntos;
        aparecerComida();
        }

}


function aparecerComida(){
    comidaY=generarAleatorio(0,canvas.width-ANCHO_COMIDA);
    comidaX=0;
    actualizarJuego();
}

