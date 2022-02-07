import { Request,Response,NextFunction } from "express"

module.exports = (app: any) => {
    
    app.use((req:Request,res:Response,next:NextFunction) =>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
        res.setHeader('Access-Control-Allow-Methods','PUT,PATCH,OPTIONS,DELETE,POST,GET')
        res.setHeader('Access-Control-Allow-headers','X-Requested-With,Content-type,Token')
        res.setHeader('Access-Control-Allow-credentials', 'true')
        next()
    })

    return

}

