const Database = require('../db/config')

module.exports = {
  async create(req, res) {
    const db = await Database()
    const pass = req.body.password
    let roomId
    let isRoom = true

    while (isRoom) {
      for (var i = 0; i < 6; i++) {
        i == 0
          ? (roomId = Math.floor(Math.random() * 10).toString())
          : (roomId += Math.floor(Math.random() * 10).toString()) //como o toString fez parecer uma letra, ai ele só foi adicionando elas como num vetor
      }
      /*Verificar se o numero da sala já existe  */
      const roomsExistIDs = await db.all(`SELECT id FROM rooms`)
      let isRoom = roomsExistIDs.some(roomsExistIDs => roomExistId === roomId)

      if (!isRoom) {
        await db.run(`INSERT INTO rooms (
        id,
        pass
      ) VALUES(
        ${parseInt(roomId)},
        ${pass}
      )`)
      }
    }

    await db.close()

    res.redirect(`/room/${roomId}`)
  }
}
