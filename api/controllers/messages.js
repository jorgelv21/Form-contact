const uuidv4 = require('uuid').v4;

module.exports = app => {
    const messagesDB = app.data.messages
    const controller = {};

    const {
        messages: messagesMock,
    } = messagesDB


    controller.listMessages = (req, res) => res.status(200).json(messagesDB);

    controller.saveMessages = (req, res) => {
        messagesMock.data.push({
            id: uuidv4(),
            nome: req.body.nome,
            email: req.body.email,
            mensagem: req.body.mensagem,
        })
        res.status(201).json(messagesMock)
    }
    return controller;
}

