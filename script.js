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
    console.log("a palavra; " + str3, " tem " + (str3.length) + " caracteres");
}
contarLetras("batata")

const carro1 = {
    modelo: "Sandero",
    marca: "Renault",
    ano: "2015",
    valor: "36.500"
}
console.log(carro1)

function mensagemopcional() {
    var str4 = prompt("seu nome")
    console.log("olá ", str4)
}
mensagemopcional("")


function calcMedia(num1, num2, num3) {
    soma = (num1 + num2 + num3)
    media = (soma / 3)
    console.log("média é igual a ", media)
}
calcMedia(10, 30, 20)

function lacoCond(i) {
    while (i < 20) {
        i = (i + 1)
        if (i % 3 === 0) {
            console.log("o numero ", i, " é multiplo de 3")
        } else {
            console.log("o numero ", i, " não é multiplo de 3")
        }

    }
}
lacoCond(0)

function Palindromo(str) {
    if (str === str.split("").reverse().join("")) {
        console.log(str, "é palindromo")
    } else {
        console.log(str, "não é palindromo")
    }
}
Palindromo("arara")