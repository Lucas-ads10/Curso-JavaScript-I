//Chamar função quando o usuário digitar algum valor no campo "name"
function receiveName(){
    //Receber dados do campo "name" do formulario quando usuario digitar valor no campo
    const nameOne = document.getElementById("name").value;
    console.log(nameOne);

    //Enviar os dados para o formulário do arquivo index.html utilizando o atributo ID
    document.getElementById("receberName").value = nameOne;
   
    //Enviar os dados para o arquivo index.html utilizando o atributo ID
    document.getElementById("valueName").innerHTML = nameOne;
}