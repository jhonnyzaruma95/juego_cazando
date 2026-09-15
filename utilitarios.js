function generarAleatorio(min,max){
    let random=Math.random();//0-1
    //Ejemplo: max es 500, minimo es 5
    let numero=random*(max-min);//0-max 0-495
    let numeroEntero = Math.ceil(numero);
    //Ejemplo: 0
    numeroEntero=numeroEntero+min;//5-500
    return numeroEntero
}