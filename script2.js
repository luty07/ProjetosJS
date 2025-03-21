function verificarSinal(sinal) {
    if (sinal === 0) {
        console.log("o seu numero é zero")
    } else {
        if (sinal < 0) {
            console.log("seu numero é negativo")
        } else {
            console.log("seu numero é positivo")
        }
    }
}
verificarSinal(-10)

function convertTemp(c) {
    console.log((c * 9/5) + 32)
  }
  convertTemp(27)

function somatorio(i, soma){
    while (i < 100) {
        i = (i + 1)
        soma = (soma + i)
        console.log(i)
console.log("o resultado da soma é ", soma)
    }

}
somatorio(0, 0)