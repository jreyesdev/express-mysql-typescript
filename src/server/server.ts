import dotenv from 'dotenv'
import compression from 'compression'
import express from 'express'
import path from 'path'

import router from '../routes/router'

const dot = dotenv.config()

if(dot.error) throw new Error('Faltan variables de entorno .env')

export default class Server{
    public app: express.Application
    public port: number
    
    constructor(){
        this.port = Number(process.env.APP_PORT) || 3000
        this.app = express()
        this.middlewares()
        this.routes()
    }

    static init(){
        return new Server()
    }

    private middlewares(){
        this.app.use(compression())
        this.app.use(express.static(path.resolve(__dirname,'../public')))
    }

    private routes(){
        this.app.use(router)
    }

    start(){
        this.app.listen(this.port, () => {
            console.log(`Server on port ${this.port}`)
        })
    }
}