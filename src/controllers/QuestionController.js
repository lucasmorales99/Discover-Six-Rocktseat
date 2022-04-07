const { is } = require('express/lib/request')
const Database = require('../db/config')
module.exports = {
  async index(req, res) {
    const db = await Database()
    const roomId = params.room
    const questionId = params.question
    const action = params.action
    const password = req.body.password

    console.log(
      `room=${roomId}, questionId=${questionId}, action=${action}, password=${password}`
    )

    /*Verificar se a senha está correta */
    const verifyRomm = await db.get(`SELECT * FROM rooms WHERE id = ${roomId}`)
    if (verifyRomm.pass == password) {
      if (action == ' delete') {
        await db.run(`DELETE FROM questions WHERE id= ${questionId}`)
      } else if (action == 'check') {
        await db.run(`UPDATE questions SET read = 1`)
      }
      res.redirect(`/room/${roomId}`)
    } else {
      res.render('passincorrect', { roomId: roomId })
    }
  },

  async create(req, res) {
    const db = await Database()
    const question = req.body.question
    const roomId = req.params.room

    await db.run(`INSERT INTO questions(
      title,
      room,
      read
    )VALUES(
      "${question}",
      ${room},
      0
    )`)
    //o question tem que ficar com as aaspas duplas pois é uma string
    res.redirect(`/room/${roomId}`)
  }
}
