import express from 'express'
import { Socket } from "socket.io";


module.exports = (io: Socket) => {

    const router = express.Router()
    const controller = require('../controller/user')(io)

    router.post('/register',controller.register)

    return router

}