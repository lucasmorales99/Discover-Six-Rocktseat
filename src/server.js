const express = require('express')
const route = require('./routes')
const path = require('path')

const server = express()

server.set('view engine', 'ejs')

server.use(express.static('public')) // o expresse vai usar , dentro do espress a localizao estatica da pasta public(procurando na raiz do objeto)

server.set('views', path.join(__dirname, 'views')) //join é de juntar, o dirname ele vai trazer o nome da pasta do projeto(ele acaba se tornando src)

server.use(express.urlencoded({ extended: true })) //pegar o conteudo que está vindo do formulario, decodificar e depois passar para o controller

server.use(route)

server.listen(3000, () => console.log('Rodando'))
