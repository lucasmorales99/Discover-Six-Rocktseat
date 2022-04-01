module.exports = {
  async index(req, res, params) {
    console.log(res)
    console.log(params)
    const roomId = params.room
    const questionId = params.question
    const action = params.action
    const password = req.body.password

    console.log(
      `room=${roomId}, questionId=${questionId}, action=${action}, password=${password}`
    )
  }
}
