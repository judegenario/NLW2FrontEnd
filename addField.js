//Procurar o botao
document.querySelector("#add-time")
.addEventListener('click', cloneField)//quando clicar no botao, duplica o campo

//Executar uma acao
function cloneField(){
    //Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    //par cada campo, limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpar ele
        field.value="";
    })
    //Colocar nesse lugar da página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
