const register ={
    nome: "",
    sobrenome: "",
    estudo: "",
    ano:""
}
function pegarValores(evento){
    register.nome = document.getElementById('name').value
    register.sobrenome = document.getElementById('surname').value
    register.estudo = document.getElementById('study').value
    register.ano = document.getElementById('birthday').value

    if (register.nome != '' || register.sobrenome != '' ||  register.estudo != '' ||  register.ano != ''){
        document.write("Nome: " + nome + "<br>" + "Sobrenome: " + sobrenome "Estudo: " + estudo + "<br>" "Ano: " + ano +)
    }else{
        alert('Campos incompletos')
    }
}














// Obtém o botão pelo ID
    const botao = document.getElementById("button");
    const inputElement = document.getElementById("name");
// Adiciona um evento de clique ao botão

    botao.addEventListener("submit", function (){
  
    function.preventDefault();
        
    // Obtém o valor do input quando o botão é clicado
    const nameOne = inputElement.value;
  
  // Agora, você pode usar valorDoInput da forma que desejar
    console.log("O valor do input é: " + nameOne);
}
    alert("O valor do input é: " + nameOne);