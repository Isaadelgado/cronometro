let segundos = 0;
let intervalo = null;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

startBtn.addEventListener("click", iniciarCronometro);
pauseBtn.addEventListener("click", pausarCronometro);
resetBtn.addEventListener("click", resetarCronometro);

function iniciarCronometro() {
    if (intervalo) return; //evita que exista multiplos intervalos

    intervalo = setInterval(() => {
        segundos++;
        atualizaDisplay();
    }, 1000);
}

function pausarCronometro() {
    clearInterval(intervalo)
    intervalo = null
}

function resetarCronometro() {
    pausarCronometro();
    segundos = 0;
    atualizaDisplay();
    
}


function formatarTempo(segundosTotais) {
    const minutos = Math.floor(segundosTotais / 60);
    const segundos = segundosTotais % 60;
    return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`
}

function atualizaDisplay() {
    display.textContent = formatarTempo(segundos)

}