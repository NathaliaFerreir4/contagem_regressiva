let diminuir = document.getElementById('diminuir');
let resetar = document.getElementById('resetar');
let aumentar = document.getElementById('aumentar');
let tempoNaTela = document.getElementById('numero')

let tempo = 60;

function atualizarContador(){
    tempoNaTela.innerHTML = tempo;
    if (tempo > 0){
        tempo--;
    }
}
setInterval(atualizarContador,1000);

function maisUm(){
    tempo++;
}
function menosUm(){
    tempo--;
}
function zerar(){
    tempo = 60;
}

