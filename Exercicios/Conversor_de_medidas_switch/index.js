const valor = parseFloat(prompt("Escreva o valor a ser convertido: (em metros)"))
const unidade = prompt("Agora escolha uma das opções: \n'milímetro(mm)' \n'centímetro(cm)' \n'decímetro(dm)' \n'decâmetro(dam)' \n'hectômoetro(hm)' \n'quilômetro(km)'")

const conversor = {
    milimetro: valor*1000,
    centimetro: valor*100,
    decimetro: valor*10,
    decametro: valor/10,
    hectometro: valor/100,
    quilometro: valor/1000
}

switch (unidade) {
    case "mm":
        alert("O resultado em milímetros(mm) é: " + conversor.milimetro )    
        break
    case "cm":
        alert("O resultado em decímetro(dm) é: " + conversor.centimetro )    
        break
    case "dm":1
        alert("O resultado em decâmetro(dam) é: " + conversor.decimetro )    
        break
    case "dam":
        alert("O resultado em decâmetro(dam) é: " + conversor.decametro )    
        break
    case "hm":
        alert("O resultado em hectômoetro(hm)  é: " + conversor.hectometro)    
        break
    case "km":
        alert("O resultado em quilômetro(km) é: " + conversor.quilometro)    
        break
    default: 
        alert("ERRO :(")
}