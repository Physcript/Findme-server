
import { Response,Request } from 'express'
import { Socket } from 'socket.io'


module.exports = (io: Socket, app:any ) => {

    const userRoutes = require('../routes/user')(io)

    io.on('connection', (socket) => {

        console.log('connected')


        // routes
        app.use('/api', userRoutes)
        

        // not detected
        app.use((req: Request,res: Response) => {

            res.status(404).json({
                message: 'Not Found'
            })

        })
    })
}