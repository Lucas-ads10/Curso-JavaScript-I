var nome = "";
var sobrenome = "";
var estudo = "";
var ano = "";
var primeiroNumero = "";
var segundoNumero = "";

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
    
    sessionStorage.setItem('valorDigitado', nome);
}



function calculo(){
    primeiroNumero = document.getElementById('firstNumber').value;
    segundoNumero = document.getElementById('secondNumber').value;
}

