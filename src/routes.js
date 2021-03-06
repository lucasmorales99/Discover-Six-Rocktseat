const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render('index', { page: 'enter-room' }))
route.get('/create-room', (req, res) =>
  res.render('create-room', { page: 'create-room' })
)

route.get('/room/:room', (req, res) => res.render('room'))
//Formato que o formulario de dentro da modal temq ue passar a informação
route.post('/question/:room/:question/:action', QuestionController.index())
route.post('/create-pass', RoomController.create)

module.exports = route
