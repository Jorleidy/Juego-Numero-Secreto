let numeroSecreto = 0;
let intentos=0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(intentos);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
    }

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
   
   if (numeroUsuario===numeroSecreto){
    asignarTextoElemento("p.texto__parrafo", `Acertaste el numero en ${intentos} ${(intentos===1)? "vez": "veces"}`);
    document.getElementById("reiniciar").removeAttribute("disabled");   

   }else{
    //El usuario no acerto.
    if(numeroUsuario>numeroSecreto){
        asignarTextoElemento("p.texto__parrafo", "El numero secreto es menor");   
    }else{
        asignarTextoElemento("p.texto__parrafo", "El numero secreto es mayor");   
    }
    intentos++;
    limpiarCaja();
   }
    return;
}

function limpiarCaja() {
 document.querySelector("#valorUsuario").value="";
   
}

function generarNumeroSecreto() {
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
console.log(numeroGenerado);
console.log(listaNumerosSorteados);
//Si ya sorteamos todos los numeros
if (listaNumerosSorteados.length==numeroMaximo) {
    asignarTextoElemento('p.texto__parrafo',"Ya se sortearon todos los numeros posibles")
}else{
//Si el numero generado esta incluido en la lista

if (listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
}else{
listaNumerosSorteados.push(numeroGenerado);
return numeroGenerado;
}
}
}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p.texto__parrafo', `Indica un número del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}


function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros 
    //generar el numero aleatorio 
//inicializar el numero de intentos
condicionesIniciales();
    //deshabilitar el boton de nuevo juego 
document.querySelector("#reiniciar").setAttribute("disabled","true");
     
}

condicionesIniciales();