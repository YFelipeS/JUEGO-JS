//inicicalizacion de variable
let tarjeraDestapadas = 0;
var tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let mostrartiempo;
let temporizador=false;
let mostrarMovimientos = document.getElementById("movimientos");
let mostrarAciertos = document.getElementById("aciertos");
let mostrarTiempo=document.getElementById("t-restante");
let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
let timer=30;
let timerinicial=30;
let tiempoRegresivo=null;
numeros = numeros.sort(() => {
  return Math.random() - 0.5;
});

function contarTiempo(){
tiempoRegresivo= setInterval(() => {
timer--;
mostrarTiempo.innerHTML=`Tiempo : ${timer} segundos`;
if(timer==0){
    clearInterval(tiempoRegresivo);
    bloquartarjetas()

    
}
},1000);
}

function bloquartarjetas(){
    for(i=0;i<=15;i++){
        let tarjetabloqueada=document.getElementById(i);
        tarjetabloqueada.innerHTML=numeros[i];
        tarjetabloqueada.disabled=true;
    }
}




console.log(numeros);

function destapar(id) {
    if(temporizador==false){
        contarTiempo();
        temporizador = true;
    }
  tarjeraDestapadas++;
  console.log(tarjeraDestapadas);

  if (tarjeraDestapadas == 1) {
    tarjeta1 = document.getElementById(id);
    primerResultado = numeros[id];
    tarjeta1.innerHTML = primerResultado;

    tarjeta1.disabled = true;
  } else if (tarjeraDestapadas == 2) {
    tarjeta2 = document.getElementById(id);
    segundoResultado = numeros[id];
    tarjeta2.innerHTML = segundoResultado;
    tarjeta2.disabled = true;
    movimientos++;
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;
  }
  if (primerResultado == segundoResultado) {
    tarjeraDestapadas = 0;

    aciertos++;
    mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
    if(aciertos==8){
        clearInterval(tiempoRegresivo);
       mostrarAciertos.innerHTML = `Aciertos : ${aciertos} 😍`;
       mostrarTiempo.innerHTML=`fantastico solo te demoraste ${timerinicial-timer}segundos`
       mostrarMovimientos.innerHTML = `Movimientos : ${movimientos}😍 `;
    }
  } else {
    setTimeout(() => {
      tarjeta1.innerHTML = '  ';
      tarjeta2.innerHTML = '  ';
      tarjeta1.disabled = false;
      tarjeta2.disabled = false;
      tarjeraDestapadas = 0;
    }, 800);
  }
}
