var nome = "";
var sobrenome = "";
var estudo = "";
var ano = "";
var primeiroNumero = "";
var segundoNumero = "";
var adição = "";
var subtracao = "";
var mutiplicacao = "";
var divisao = "";

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
    
    var inframe = document.getElementById('paginaExterna');
    var inputPaginaExterna = inframe.contentDocument.getElementById('nome');
    var valorDoInput = inputPaginaExterna.value;
    console.log(valorDoInput)
}



function calculo(){
    primeiroNumero = document.getElementById('firstNumber').value;
    segundoNumero = document.getElementById('secondNumber').value;
    
    adicao = primeiroNumero + segundoNumero;
    subtracao = primeiroNumero - segundoNumero;
    divisao = primeiroNumero / segundoNumero;
    multiplicacao = primeiroNumero * segundoNumero;

    if (primeiroNumero != '', segundoNumero != ''){
        document.getElementById('resultAdicao').innerHTML = "Adição: "+adicao;
        document.getElementById('resultSubtracao').innerHTML = "Subtração: "+subtracao;
        document.getElementById('resultDivisao').innerHTML = "Divisão: "+divisao;
        document.getElementById('resultMultiplicacao').innerHTML = "Multiplicacão: "+multiplicacao;
    } else{
    alert('Campos incompletos');
    }
}

