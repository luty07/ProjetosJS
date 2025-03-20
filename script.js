console.log('Hello world');
let nome = "braian"
const idade = "18"
function saudacao() {
    console.log("Olá, " + nome);
}


saudacao();
if (idade >= 18) {
    console.log("você é maior de idade")
} else {
    console.log("você é menor de idade")
}

function parImpar(numero) {
    if (numero % 2 === 0) {
        console.log("seu numero é par")
    } else {
        console.log("seu numero é impar")
    }
}
parImpar(1);

function contas(numero1, numero2) {
    console.log(numero1 + numero2)
    console.log(numero1 - numero2)
    console.log(numero1 * numero2)
    console.log(numero1 / numero2)
}

contas(3, 4)

function contagem(segundos) {
    while (segundos !== 0) {
        console.log(segundos -= 1)
    }

}


function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(newString)
    return newString;
}
reverseString("banana");

function contarLetras(str3) {
    var str3 = prompt("insira")
    console.log(
        "a palavra; " + str3 ," tem " + (str3.length) + " caracteres"
    );
}
contarLetras("")

