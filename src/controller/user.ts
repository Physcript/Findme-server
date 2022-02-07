import { Request, Response } from "express";
import { Socket } from "socket.io";



module.exports = (io: Socket) => {

    var con: any = {}

    con.register = ((req: Request,res: Response) => {

        res.status(200).json({
            message: 'created'
        })

        io.emit('register')
        return

    })

    return con

}