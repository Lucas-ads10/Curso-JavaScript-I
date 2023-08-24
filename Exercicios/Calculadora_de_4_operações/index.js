var nome = "";
var sobrenome = "";
var estudo = "";
var ano = "";
var primeiroNumero = 0;
var segundoNumero = 0;
var adição = 0;
var subtracao = 0;
var mutiplicacao = 0;
var divisao = 0;

function capturar(){
    nome = document.getElementById('name').value;
    sobrenome = document.getElementById('surname').value;
    estudo = document.getElementById('study').value;
    ano = document.getElementById('birthday').value;

    if (nome != '' , sobrenome != '', estudo != '', ano != '' ){
        window.location.href = "calculadora.html";
    }else{
        alert('Campos incompletos');
    }
}



function calculo(){
    primeiroNumero = parseFloat(document.getElementById('firstNumber').value);
    segundoNumero = parseFloat(document.getElementById('secondNumber').value);

    adicao = primeiroNumero + segundoNumero;
    subtracao = primeiroNumero - segundoNumero;
    divisao = primeiroNumero / segundoNumero;
    multiplicacao = primeiroNumero * segundoNumero;

    if (primeiroNumero != undefined, segundoNumero != undefined){
        document.getElementById('resultAdicao').innerHTML = "Adição: "+adicao;
        document.getElementById('resultSubtracao').innerHTML = "Subtração: "+subtracao;
        document.getElementById('resultDivisao').innerHTML = "Divisão: "+divisao;
        document.getElementById('resultMultiplicacao').innerHTML = "Multiplicacão: "+multiplicacao;
    } else{
    alert('Campos incompletos');
    }
}

