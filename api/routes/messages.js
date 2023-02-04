module.exports = app =>{
    const controller = app.controllers.messages

    app.route('/api/v1/messages')
    .get(controller.listMessages)
    .post(controller.saveMessages)

}