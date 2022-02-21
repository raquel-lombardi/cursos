/*JS*/
var produto ="camisa"
var texto ="Temos em estoque"

texto +=produto
console.log(texto)

// funções
// serve para quando o trecho se repete varias vezes

function action (){
    console.log('realiza uma função')
}
action() // para chamar ela basta colocar

//para retornar um valor usar o return
function action(){
    return 100
}
console.log(15 +action)

// declarar variáveis, não precisa usar var
function sum (number1, number2){
    return number1 +number2
}
console.log (sum(10,10)) // argumentos

//condicionais

var isActive = true //ou false
var message = ''

if(isActive){ //se
    message='está ativo'
} else{ // se não
    message='não está ativo'
}
console.log(message)

//condicionais composta
var sinal =''
var message = ''
 if(sinal =='verde'){
     message='pode passar'
 } else if (message =='amarelo'){ //se não
     message='atenção'
 } else if (sinal=='vermelho'){
     message='parar'
 } else{
     message = 'valor invalido'
 }

console.log(message)



//usando o switch, sempre usar break para parar a verificação das informações
var sinal =''
var message = ''
switch (sinal){
    case 'verde':
        message='pode passar'
        break

    case 'vermelho':
        message='parar'
        break

    case 'amarelo':
        message ='atenção'
        break

    default:
        message ='valor inválido'

}
console.log(message)

//operadores de comparação
/*
==  igual
=== exatamente igual (valor e tipo)
!=  não pe igual
>   Maior
<   menor
>=  maior ou igual
<= menir ou igual */
// === compara se valores são iguais e se tipos são iguais 
if (10 ===10){
    console.log('ok')
}

if (10 === true){
    console.log('não ok')

}

if (10 != true){
    console.log('ok')
}

//Operados lógico and (&&), or(||), not (! antes da variável)

var email ='aline@aline.com'
var password ='1233'

/*if (email ==='aline@aline.com' && password ==='1233'){

}
if (email =='aline@aline.com' || password '1233'){

}
if (!email =='aline@aline.com'){

}*/

//operador ternário
//antes
var age =15
var result =''

if (age>=18){
    result = 'ok'
} else{
    result='não ok'
}
console.log(result)

//depois
// condição ? true(resultado)  : false(se não) 
var age =15
var result = age>=18 ? 'ok': 'não ok'

console.log(result)

//repetição for usada quando se sabe quantas vezes a repetição irá acontecer
for(contagem; condição; incremento)

for (var count=0; count <=10;count++){
    console.log(count)
}

//usado quando não se sabe quantas vezes irá repetir
var i=0
while(i<-10){
    console.log(1)
    i++
}

//escopo de função
function showCar(){
    // dentro das chaves fica o escopo local
    var car ="bmw"
    console.log(car)
}
showCar()
console.log(car)// se tentar chamar o console.log (car) agora não será possível acessar mais
// para ser global, basta tirar as chaves

//escopo global
var car ="bmw"
function showCar(){
    // dentro das chaves fica o escopo local
        console.log(car)
}
showCar()
console.log(car)

//escopo de bloco (if, for e while)

// o escopo definido pelo if deixa acessar a variável
if (true){
    var car = 'bmw'
}
console.log(car)

// para boa pratica, devemos declarar a variável no escopo global
var car=''
if (true){
    car='bmw'
}
console.log(car)

//tudo é objeto
//operações de string

//entidade de pessoa realizando uma ação
var person = {
    name:"João Silva",
    height: 7.5,
    sayHello: function () { //adicionamos uma função para uma ação, um método
        console.log("Hello")        
    }
}
person.sayHello()

var text = 'hello cataline'

// conta os caracteres contando os espaços
var value =text.length
console.log(value)

//métodos
var text = 'hello cataline'
var value =text.replace('o', '@') //substitui palavras, letras
console.log(value)

var text = 'hello cataline'
var value =text.toUpperCase() // tudo em maiúscula
console.log(value)

var text = 'hello cataline'
var value =text.toLowerCase // tudo em minúscula
console.log(value)

var text = 'hello cataline'
var value =text.trim() // retirar espaçamento
console.log(value)

//é muito util no dia a dia para conseguir separar as palavras
var text = 'hello cataline'
var value =text.split(' ') // divide string em array de strings
console.log(value)

var text = 'https://cataline.io'
var value =text.split('//') // divide string em array de strings
console.log(value[0])


// operadores em números

var number = 10.3
var newValue= number.toString() //transforma em string
console.log(newValue)

var number = 10.3
var newValue= Math.trunc() //arredonda pra baixo
console.log(newValue)

var number = 10.3
var newValue= Math.round() //arredonda valor para o numero mais próximo inteiro
console.log(newValue)

var number = 10.3
var newValue= Math.ceil() //arredonda pra menos
console.log(newValue)

// operadores com array
var array =['joão', 'maria','oliver']
console.log(array.length) //informa o tamanho do array


var array =['joão', 'maria','oliver']
for(var1=0; i<array.length; i++){
console.log(array)
}

var array =['joão', 'maria','oliver']
for(var1=0; i<array.length; i++){
console.log(array[i]) 
}


var array =['joão', 'maria','oliver']
var newValue = array.indexOf('João')
console.log(newValue) // imprime a posição dentro do array


var array =['joão', 'maria','oliver']
array.pop() //excluir var de array, a ultima posição
console.log(array)



var array =['joão', 'maria','oliver']
array.pop() //excluir var de array, a ultima posição
console.log(array.pop) // para ver o valor deletando


var array =['joão', 'maria','oliver']
array.push() //incrementa valor na array
console.log(array)


var array =['joão', 'maria','oliver']
array.splice(0, 1) //deleta posição especifica (sendo o primeiro numero a posição e o segundo numero, quantas vezes irá deletar quem está na posição )
console.log(array)

//para banco de dados quando não se sabe as informações


var array =['joão', 'maria','oliver']
var index = array.indexOf('joão')
array.splice(index, 1)//exclui informação especifica
console.log(array)

//operações com objetos
var person ={
    name:"Aline Lombardi",
    height: 70.5,
}
person.age=15 // para adicionar mais informações no objeto
person.name="Aline Fernandes" // para alterar a propriedade do objeto
console.log(person)

// para congelar e ele não alterar, colocar Objetct.freezer
var person ={
    name:"Aline Lombardi",
    height: 70.5,
}

Object.freeze(person) //congela toda as alterações abaixo
person.age=15 // para adicionar mais informações no objeto
person.name="Aline Fernandes" // para alterar a propriedade do objeto
console.log(person)


var person ={
    name:"Aline Lombardi",
    height: 70.5,
}

var amy={
    age:15
}

var newObjeto= Object.assign(person, amy) // mescla dois objetos. 

console.log(newObjeto)

//console.log(window.document) //mostra tudo que tem no arquivo quando aberto

var input = document.getElementsById('idade')
console.log(input)

var input = document.getElementsByClassName('idade') //retorna array
console.log(input)

var input = document.getElementsByClassName('idade')[0] //retorna o input
console.log(input)

var input = document.getElementsByTagName('idade') //retorna array
console.log(input)

var input = document.getElementsByTagName('idade')[0] //retorna input
console.log(input)


//pode descartar todas acima e usar, porem esse imput pode falhar por ter varios
var input = document.querySelector('div#app input')


//para especificar o input
var input = document.querySelector('input#idade')

var input = document.querySelectorAll('input') // retorna tudo que tenha essa seleção

var input = document.querySelector('input#idade')
console.log(input.parentElement.parentElement) //vai trazer o pai


var input = document.querySelector('input#idade')
console.log(input.previousElementSibling) //traz o elemento anterior

var input = document.querySelector('input#idade')
console.log(input.nextElementSibling) //traz o elemento posterior

var input = document.querySelector('div#app ul')
console.log(input.children)[0] //filhos da seleção com opção de selecionar o índice 

//detectar eventos

// evento com concatenação

var button =document.querySelector('#app button')
var input =document.querySelector('#app input#idade')

button.addEventListener('click', function(){
    alert('sua idade é: ' + input.value)
})



//outra forma de evento com concatenação quando tem muita informação, colocar ela como função
var button =document.querySelector('#app button')
var input =document.querySelector('#app input#idade')

function showAge(){
    alert('a sua idade é: ' + input.value)
    
}

button.addEventListener('click', showAge) // não podemos colocar () após o showAge para o java não entender errado. não vai fazer nada
    
//prevenção de padrão

//desta forma a pagina não carrega perdendo as informações

var button =document.querySelector('#app button')
var input =document.querySelector('#app input#idade')

button.addEventListener('click', function(event){
    event.preventDefault()
    console.log('sua idade é: ' + input.value)
})


//prevenir arquivo de # no final do link
var link =document.querySelector('#app a')

link.addEventListener('click', function(event){
    event.preventDefault()
    console.log('foi clicado')
})

//alteração de estilos. 

var element = document.querySelector('body')
element.style.backgroundColor ="#000"

var element = document.querySelector('div#app')
element.style.backgroundColor ="#000"
element.style.height='200px'
element.style.width='200px'

var app = document.querySelector('div#app')

// .outerHTML - todo o HTML do elemento
// .innerHTML - HTML interno
// todos retornam em format de string

// .innerText - todo o texto, sem tags - este retorna apenas o conteúdo, coloca como texto puro 


console.log(app.innerHTML) //

app.outerHTML = "olá" // substitui a informação do HTML de acordo com cada opção acima, ele não incrementa, apenas substitui. 

// operações de elementos
// <a href="http://google.com">Visitar Google</a>

//acrescentar informações nos elementos do HTML

var app = document.querySelector('div#app')

var link = document.createElement('a')
var textLink = document.createTextNode('Visitar google')

link.setAttribute('href', 'http://google.com')
link.appendChild(textLink)

app.appendChild(link)


//para excluir elementos

var app =document.querySelector('div#app')

var text = document.querySelector('div#app p')
app.removeChild(text)

//ação realizada a cada periodo de tempo toda hora


function doAction() {
    console.log('executou')
}
setInterval(doAction, 3000)

//ação depois do tempo determinado e para

function doAction() {
    console.log('executou')
}
setTimeout(doAction, 3000)

//informações que ficam salvar no navegador 

localStorage.theme = 'dark'

//promises

var voceComprouOsProdutos = new Promise(function(resolve, reject) {
    var produto = ['camisa', 'sapato', 'calça']
    resolve(produtos)
})
console.log(voceComprouOsProdutos)

// promessa rejeitada
var voceComprouOsProdutos = new Promise(function(resolve, reject) {
    var produto = ['camisa', 'sapato', 'calça']
    reject('deu ruim')
})
console.log(voceComprouOsProdutos)

//promessa com tempo para retorno da resposta
var voceComprouOsProdutos = new Promise(function(resolve, reject) {
    setTimeout(function () {
    
        var produto = ['camisa', 'sapato', 'calça']
        resolve(produtos)
    }, 3000)
    
})
voceComprouOsProdutos.then(function (produto) {
    console.log(produto)    
})


//promessa rejeitada, usamos o catch
var voceComprouOsProdutos = new Promise(function(resolve, reject) {
    setTimeout(function () {
    
        var produto = ['camisa', 'sapato', 'calça']
        reject('deu ruim')
    }, 3000)
    
})
voceComprouOsProdutos.then(function (produto) {
    console.log(produto)    
})
.catch(function (error) {
    console.log('error')    
})

//requisições ajax

var button = document.querySelector('#app button')

button.addEventListener('click', function () {
    var xhr = new XMLHttpRequest() //classe construtora
    xhr.open('GET','https://api.github.com/users') // get para obter informações
    xhr.send() // se fosse adicionar informações, colocaria aqui no send

    xhr.onreadystatechange = function () { // quando o estado da requisição mudar
        if(xhr.readyState ===4){ //executa função, quando o código da requisição for 4, finalizou
            //console.log(xhr.responseText) // retorna como texto precisa alterar para Jason
            var data = JSON.parse(xhr.responseText)
            console.log(data[0].login) // ira retornar apenas o login da posição 0.           
        }        
    }
})

//axios para requisitar

var button = document.querySelector('#app button')

button.addEventListener('click', function (){
    axios.get('https://api.github.com/users')
    .then(function () {
        console.log('deu certo')
    })
    .catch(function () {
        console.log('deu ruim')        
    })
})


//axios para mostrar a resposta

var button = document.querySelector('#app button')

button.addEventListener('click', function (){
    axios.get('https://api.github.com/users')
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)        
    })
})

//axios para pegar as informações

var button = document.querySelector('#app button')

button.addEventListener('click', function (){
    axios.get('https://api.github.com/users')
    .then(function (response) {
        console.log(response.data)
    })
    .catch(function (error) {
        console.log(error)        
    })
})

//axios para pegar dado especifico das informações, como o login da posição 0

var button = document.querySelector('#app button')

button.addEventListener('click', function (){
    axios.get('https://api.github.com/users')
    .then(function (response) {
        console.log(response.data[0].login)
    })
    .catch(function (error) {
        console.log(error)        
    })
})

//axios para finalizar após mostrar os dados solicitados. 
var button = document.querySelector('#app button')

button.addEventListener('click', function (){
    axios.get('https://api.github.com/users')
    .then(function (response) {
        console.log(response.data)
    })
    .catch(function (error) {
        console.log(error)        
    })
    .finally(function () {
        console.log('finalizar')
    })
})