import Server from './server/server'
import MySql from './mysql/mysql'

const server = Server.init()
const db = new MySql()

server.start()