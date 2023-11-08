let pcTiro;
let playerTiro;
const boton = document.getElementById('boton');

// div que aparecerá para mostrar la respuesta de la pc y el resultado
const respuestas= document.querySelectorAll('.mostrar')

// div donde aparece la imagen de la opcion del jugador
const divJugador= document.getElementById('jugador-eleccion')

const instruccion= document.getElementById('instruccion');

let imgJugador = document.getElementById('imgJugador')
let imgPc = document.getElementById('imgPc')
let resultado = document.getElementById('resultado')

const btnPiedra = document.getElementById('btn-piedra')
const btnPapel = document.getElementById('btn-papel')
const btnTijera = document.getElementById('btn-tijera')

const reload = document.getElementById('replay');

let respuesta
let resultadosHistorial=[]
let listaHistorial = document.getElementById('listaHistorial')

const numAleatorio = Math.round(Math.random()*(1-3)+3);

        switch (numAleatorio) {
            case 1:
                pcTiro='piedra'
                break;
            case 2:
                pcTiro='papel'
                break;
            case 3:
                pcTiro='tijera'
                break;
            default:
                break;
            }

btnPiedra.addEventListener('click', function(){
    imgJugador.src = './img/piedra.png'
    divJugador.style.display= 'block';
    boton.disabled= false;
    playerTiro= 'piedra'
});

btnPapel.addEventListener('click', function(){
    imgJugador.src = './img/papel.png'
    divJugador.style.display= 'block';
    boton.disabled= false;
    playerTiro= 'papel'

});

btnTijera.addEventListener('click', function(){
    imgJugador.src = './img/tijera.png'
    divJugador.style.display= 'block';
    boton.disabled= false;
    playerTiro= 'tijera'
});

function jugar(){
    if(playerTiro==pcTiro){
        console.log('Empate');
        imgPc.src = `./img/${pcTiro}.png`;
        resultado.src = './img/empate.png'
        respuesta= 'Empate'
    } else if(pcTiro=='piedra' && playerTiro=='papel' || pcTiro=='tijera' && playerTiro=='piedra' || pcTiro=='papel' && playerTiro=='tijera'){
        console.log('Tú ganas');
        imgPc.src = `./img/${pcTiro}.png`;
        resultado.src = './img/ganar.png';
        respuesta= 'Ganaste'
    } else {
        console.log('Tú pierdes')
        imgPc.src = `./img/${pcTiro}.png`;
        resultado.src = './img/perder.png';
        respuesta= 'Perdiste'
    }
    resultadosHistorial.push(respuesta); // Agregar resultado al historial
    sessionStorage.setItem('historialDePartidas', JSON.stringify(resultadosHistorial)); // Actualizar sessionStorage

}

function imprimirHistorial(){
    resultadosHistorial.forEach((respuesta, index)=>{
        elemento=   `   <li class="partida-elemento">
        <span>Partida número:</span> ${index+1}
        <span>El resultado es: </span> ${respuesta}
        </li> `
        listaHistorial.insertAdjacentHTML("beforeend", elemento)

    })
}

boton.addEventListener('click', function(){
        respuestas.forEach(function(div) {
            div.style.display='block'
        })
        boton.disabled = true;
        btnPiedra.disabled= true;
        btnPapel.disabled= true;
        btnTijera.disabled= true;

        instruccion.style.display='none'
        jugar()
    });

reload.addEventListener('click', function(){
    location.reload();
});


// modal
// Obtener elementos del DOM
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');


// Abrir el modal al hacer clic en el botón
openModalBtn.addEventListener('click', ()=> {
  modal.style.display = 'block';
  imprimirHistorial()

});

// Cerrar el modal al hacer clic en la "X"
closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera del contenido del modal
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

let data = sessionStorage.getItem('historialDePartidas')
if (data){
    resultadosHistorial= JSON.parse(data)
} else{
    resultadosHistorial=[]
}

