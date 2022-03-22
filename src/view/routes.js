const express = require('express')
const { render } = require('express/lib/response')

const route = express.Router()

route.get('/', (req, res) => res, render('index'))
