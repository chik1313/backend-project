const db = require('../db')
class UserController {
    async createUser(req, res) {
        const {id, name} = req.body
        const newPerson = await db.query(`INSERT INTO client (ID_DEP_CLIENT, NAME_CLIENT) values ($1, $2) RETURNING *`, [id, name])
        res.json(newPerson.rows[0])
    }

    async getUsers(req, res) {
        const users = await db.query(`SELECT * FROM client`)
        res.json(users.rows)
    }

    async getOneUser(req, res) {
        const id = req.params.id
        const user = await db.query(`SELECT * FROM client where ID_DEP_CLIENT = $1`, [id])
        res.json(user.rows[0])
    }

    async updateUser(req, res) {
        const {id, name} = req.body
        const user = await db.query(`UPDATE client set NAME_CLIENT = $1 where ID_DEP_CLIENT = $2 RETURNING *`, [name, id])
        res.json(user.rows[0])
    }

    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query(`DELETE FROM client where ID_DEP_CLIENT = $1`, [id])
        res.json(user.rows[0])
    }
}

module.exports = new UserController()
