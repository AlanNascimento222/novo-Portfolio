const textoAnimado = document.getElementById('typeanimacao');
let i = 0
const types = [
    "O Alan",
    "Dev Front-End",
    "ProAtivo",
    "Programador",
    "Autodidata",
    "Dev Apps",
    "FreeLancer"
]

function trocaTexto () {
    if (i < types.length - 1) {
        i++
    }
    else {
        i = 0
    }
    textoAnimado.innerText = types[i]
}

trocaTexto();

setInterval(trocaTexto, 5000)