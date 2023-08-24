const idade = prompt("Informe a sua idade: ")

if (idade > 18) {
    alert("Você é maior de idade")
} else if (idade > 12) {
    alert("Você é menor de idade")
}else if (idade > 4) {
    alert("Você é criança")
}else {
    alert("..")
}


//Operador Ternário - Forma abreviada do IF ELSE

const resultado = (6 === 5) ? "Verdadeiro" : "false"

console.log(resultado)