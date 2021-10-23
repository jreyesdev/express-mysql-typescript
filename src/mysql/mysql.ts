import mysql, { MysqlError } from 'mysql'

export default class MySql{
    private static _instance: MySql
    cnn: mysql.Connection
    conectado: boolean = false

    constructor(){
        console.log('Mysql inicializada')
        this.cnn = mysql.createConnection({
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            database: process.env.DB_NAME,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASS
        })
        this.conectarDB()
    }

    public static get instance(){
        return this._instance || (this._instance = new this())
    }

    static ejecutarQuery(q: string, callback: Function){
        this.instance.cnn.query(q,(err: mysql.MysqlError,res: Object[],fields)=>{
            if(err) throw new Error(err.message)
            if(res.length){
                callback(null,res)
            }else{
                callback('El registro solicitado no existe')
            }
        })
    }

    private conectarDB(){
        this.cnn.connect((err: mysql.MysqlError) => {
            if(err) throw new Error(err.message)
            this.conectado = true
            console.log('BD is connected')
        })
    }
}