
//let parrafo = document.querySelector('p'); 
//parrafo.innerText = 'Coloca un número el 1 al 10'; //

let numeroSecreto = 0;
let intentos = 0;
let listanumeros = [];
let nunmeroMaximo = 10;


function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);  //Selector, puede selecionar un elemento del html se toma como un objeto
    elementoHTML.innerHTML = texto;  
}
console.log(numeroSecreto);

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(numeroDeUsuario));
    
    console.log(intentos);

    //=== verifica que sea igual en variable pero tambien en mismo tipo de dato en este caso numero
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`acertaste! en ${intentos} ${(intentos===1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','número secreto es menor');
        }
        else {asignarTextoElemento('p','número secreto es mayor');}
        intentos++;
        limpiarCaja();
    
    }
}
function limpiarCaja(){
document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*nunmeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listanumeros);

    if(listanumeros.length == nunmeroMaximo){
        asignarTextoElemento('p','todos los numero sorteados');

    }else{

        if(listanumeros.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listanumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto'); //indicar mensaje de intervalo de números
    asignarTextoElemento('p','Indica un número del 1 al' + nunmeroMaximo);
    numeroSecreto = generarNumeroSecreto(); //Generar el número aleatorio 
    console.log(numeroSecreto);
    intentos = 1; //inicializar el número de intentos 
}

function reiniciarJuego(){
    //limpiar juego
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //Generar el número aleatorio 
    //inicializar el número de intentos 
    condicionesIniciales();
    //deshabilitar el juego nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');}

condicionesIniciales();


/* //desafio
function mensaje() {
    console.log('Hola mundo');
}


function nombrefuncion(nombre){
 console.log(`HOla ${nombre}`);
}

nombrefuncion(n = prompt("ingresa tu nombre"));

function doble(n1,n2,n3){

    if(n1>n2 && n1>n3){
     return n1;   
    }
    else if(n2>n1 && n2>n3){
        return n2;

    }
    else return n3;

    return (n1+n2+n3)/3;



let num1 = parseInt(prompt("ingresa numero 1"));
let num2 = parseInt(prompt("ingresa numero 2"));
let num3 = parseInt(prompt("ingresa numero 3"));

num1 = doble(num1, num2, num3);
console.log(num1);
}*/