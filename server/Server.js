import express from 'express'
import UsersRoutes from '../routes/users.routes.js'


export default class Server {

    static app = express()

    static middlewares() {
        Server.app.use(express.json())
        Server.app.use(express.urlencoded({extended: true})) 
    }

    static routes() {
        const usersRoutes = new UsersRoutes()
        Server.app.use('/users', usersRoutes.router)
    }


    static runServer(port) {
        Server.app.listen(port, () => {console.log(`listen at http://localhost:${port}`)})
    }

    static run(port) {
        console.clear()
        Server.middlewares()
        Server.routes()
        Server.runServer(port)
    }

}