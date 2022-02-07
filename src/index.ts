

import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import setting from './config/setting'

//

import { createServer } from 'http'
import { Server } from 'socket.io'
import cookieParser from 'cookie-parser'

// const 
const app = express()
const httpServer = createServer(app)
const corsOptions = { origin: true, credentials: true }
const io = new Server(httpServer, { cors: { origin: 'http://localhost:3000' } }) 


// 
const userRoutes = require('./routes/user')(io)

// app uses

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors(corsOptions))
app.use(cookieParser())

// middleware
require('./config/app_debug')(app)
// cors
require('./config/app_cors')(app)

// io / routes
require('./config/app_io')(io,app)

// server startup

mongoose
    .connect(`${setting.DATABASE.URL}`,setting.DATABASE.OPTIONS)
    .then(() => console.log('DATABASE Running'))
    .catch((error) => console.log(`Connection error, ${error}`))

httpServer
    .listen(setting.SERVER.PORT, () => {
        console.log(`SERVER Running`)
    })

