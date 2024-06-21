import UsersDaoMemory from '../daos/users.dao.memory.js'
import UserHelpers from '../helpers/users.helpers.js'

export default class UserControllers {

    constructor(){
        this.db = new UsersDaoMemory()
        this.helpers = new UserHelpers()
    }


    getUsers = (req,res) => {
        const users = this.db.getUsers()
        res.json(users)
    }

    getUserById = (req,res) => {
        const { id } = req.query
        const user  = this.users.find ( user => 
            user.id === parseInt(id)
        )
        res.json(user)
    }

    addUser = (req,res) => {
        console.log(req.body);
        const newUser = this.helpers.createUser(req.body)
        this.users.push(newUser)
        res.json(newUser)
    }


    modifyUser = (req,res) => {
        let modifiedUser = null
        this.users = this.users.map(user => {
            if(user.id === parseInt(req.body.id)) {
                user = this.helpers.createUser(req.body)
                modifiedUser = user
            }
            return user
        })
        res.json(modifiedUser)
    }

    deleteUser = (req,res) => {
        this.users = this.users.filter(user => user.id !== parseInt(req.params.id) )
        res.json(this.users)
    }

}