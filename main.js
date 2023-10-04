document.addEventListener('DOMContentLoaded', function() {

let pcTiro;
let boton = document.getElementById('boton');
let respuestas= document.querySelectorAll('.mostrar')
let divJugador= document.getElementById('jugador-eleccion')

let instruccion= document.getElementById('instruccion');

let imgJugador = document.getElementById('imgJugador')
let imgPc = document.getElementById('imgPc')

let btnPiedra = document.getElementById('btn-piedra')
let btnPapel = document.getElementById('btn-papel')
let btnTijera = document.getElementById('btn-tijera')

let reload = document.getElementById('replay');

let numAleatorio = Math.round(Math.random()*(1-3)+3);

        switch (numAleatorio) {
            case 1:
                pcTiro='Piedra'
                break;
            case 2:
                pcTiro='Papel'
                break;
            case 3:
                pcTiro='Tijera'
                break;
            default:
                break;
            }

btnPiedra.addEventListener('click', function(){
    imgJugador.src = './img/piedra.png'
    divJugador.style.display= 'block';
    boton.disabled= false;
    
    if (pcTiro== 'Piedra') {
        imgPc.src = './img/piedra.png'
        console.log('Empate');
        resultado.src = './img/empate.png'
        
    };
    if (pcTiro=='Papel') {
        imgPc.src = './img/papel.png'
        console.log('Tú pierdes'); 
        resultado.src = './img/perder.png'
    };
    if (pcTiro=='Tijera') {
        imgPc.src = './img/tijera.png'
        console.log('Tú ganas'); 
        resultado.src = './img/ganar.png'
    }
});

btnPapel.addEventListener('click', function(){
    imgJugador.src = './img/papel.png'
    divJugador.style.display= 'block';
    boton.disabled= false;

    if (pcTiro== 'Piedra') {
        console.log('Tú ganas'); 
        imgPc.src = './img/piedra.png'
        resultado.src = './img/ganar.png'
    };
    if (pcTiro=='Papel') {
        imgPc.src = './img/papel.png'
        console.log('Empate'); 
        resultado.src = './img/empate.png'
    };
    if (pcTiro=='Tijera') {
        imgPc.src = './img/tijera.png'
        console.log('Tú pierdes'); 
        resultado.src = './img/perder.png'
    };


});

btnTijera.addEventListener('click', function(){
    imgJugador.src = './img/tijera.png'
    divJugador.style.display= 'block';
    boton.disabled= false;

    if (pcTiro== 'Piedra') {
        imgPc.src = './img/piedra.png'
        console.log('Tú pierdes'); 
        resultado.src = './img/perder.png'
    };
    if (pcTiro=='Papel') {
        imgPc.src = './img/papel.png'
        console.log('Tú ganas'); 
        resultado.src = './img/ganar.png'
    };
    if (pcTiro=='Tijera') {
        imgPc.src = './img/tijera.png'
        console.log('Empate'); 
        resultado.src = './img/empate.png'
    };
});

boton.addEventListener('click', function(){
        respuestas.forEach(function(div) {
            div.style.display='block'
        })
        boton.disabled = true;
        btnPiedra.disabled= true;
        btnPapel.disabled= true;
        btnTijera.disabled= true;

        instruccion.style.display='none'

    });

reload.addEventListener('click', function(){
    location.reload();
});

});

               
               