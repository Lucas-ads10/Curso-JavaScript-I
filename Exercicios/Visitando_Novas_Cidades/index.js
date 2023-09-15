const nome = prompt("Qual seu nome? ")
let cidades = ""
let contagem = 0

let resposta = prompt("Você ja visitou alguma cidade? sim/não")

while (resposta === "sim") {
    let cidade = prompt("Qual cidade você visitou? ")
    cidades += (" - " + cidade)
    contagem++
    resposta = prompt("visitou mais alguma? sim/não ")
}
alert(
    "Olá " + nome +
    "\nVocê visitou:\n " +
    contagem + " Cidades" +
    "\nCidades visitadas: \n" +
    cidades
)



