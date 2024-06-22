// import UsersDaoMemory from '../daos/users.dao.memory.js'
import UserHelpers from '../helpers/users.helpers.js'
import UsersDaoMysql from '../daos/users.dao.mysql.js'

export default class UserControllers {

    constructor(){
        // this.db = new UsersDaoMemory()
        this.db = new UsersDaoMysql()
        this.helpers = new UserHelpers()
    }


    getUsers = async (req,res) => {
        const users = await this.db.getAllUsers()
        res.json(users)
    }

    getUserById = async (req,res) => {
        const { id } = req.params
        const user = await this.db.getUserById(id)
        res.json(user)
    }

    getUserByName = async (req,res) => {
        const {name} = req.query
        const result = await this.db.getUsersByName(name)
        res.json(result)
    }

    addUser = async (req,res) => {
        const user = this.helpers.createUser(req.body)
        const result = await this.db.addUser(user)
        res.json(result)
    }


    modifyUser = async (req,res) => {
        const user = this.helpers.createUser(req.body)
        const result = await this.db.modifyUser(user)
        res.json(result)
    }

    deleteUser = async (req,res) => {
        const {id} = req.params
        const result = await this.db.deleteUser(id)
        res.json(result)
    }

}