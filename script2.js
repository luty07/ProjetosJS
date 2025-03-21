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
    console.log((c * 9 / 5) + 32)
}
convertTemp(27)

function somatorio(i, soma) {
    while (i < 100) {
        i = (i + 1)
        soma = (soma + i)
        console.log(i)
        console.log("o resultado da soma é ", soma)
    }

}
somatorio(0, 0)

function substituirPalavra(texto) {
    console.log(texto.replace("azul", "vermelho"))
}
substituirPalavra("azul")

function verificarTamanho(texto) {
    (texto.length > 10) ? console.log("o tamanho é maior que 10") : console.log("o tamanho não é maior que 10")
}
verificarTamanho("adoramos passear pelo bairro")

let frutas = ["banana", "pequi", "kiwi", "abacaxi", "jambu"]
console.log(frutas[2])

function saudacao(nome, saudacao) {
    (saudacao === "") ? console.log('Bem-vindo(a) ' + nome) : console.log(saudacao + " " + nome)
}
saudacao("braian", "Bem-vindo(a)")

function verificarAprovacao(nota) {
    (nota >= 6) ? console.log('aprovado') : console.log('reprovado')
}
verificarAprovacao(5)

for (let i = 0; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

function contarVogais(texto) {
    console.log(texto.indexOf("a", "e", "i", "o", "u") + 1)
}
contarVogais("abestado")

function somarArray(x) {
    let y;
    for (let i = 0; i < x.length; i++) {
        y += x[i];
    }
    console.log(y);
}

function dobrarNumero(n) {
    return n * 2;
}

