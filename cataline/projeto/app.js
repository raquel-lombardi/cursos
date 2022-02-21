//atividade

var submitButton = document.querySelector('#app form button')
var zipCodeField = document.querySelector('#app form input')
var content = document.querySelector('#app main')

submitButton.addEventListener('click', run)

function run(event) {
    event.preventDefault()

    var zipCode = zipCodeField.value

    zipCode = zipCode.replace(' ','')// retira espaços mas so funciona do lado de dentro da string, ou seja, só dentro das palavras
    zipCode = zipCode.replace(',','')
    zipCode = zipCode.trim() // retira espaços do inicio e final da palavra. 

    axios
    .get('https://viacep.com.br/ws/' + zipCode + '/json/')
    .then(function(response){
        if(response.data.erro){
            throw new Error('CEP Inválido')
        }
        content.innerHTML = '' //zerar a pagina
        createLine(response.data.logradouro)
        createLine(response.data.bairro)   
        createLine(response.data.localidade + '/' + response.data.uf)
       
    })
    .catch(function(error){ // tratativa de erro
        content.innerHTML = '' // zerar a pagina
        createLine('Ops Algo deu errado!')
    })
}

function createLine(text) {
    var line = document.createElement('p') // criou paragrafo 
    var text = document.createTextNode(text)

    line.appendChild(text)
    content.appendChild(line)     
}