const db = require('../db')
class ProjectController {
    async createProject(req, res) {
        const {id, idproject} = req.body
        const newProject = await db.query(`INSERT INTO project (ID_DEP_CLIENT, ID_PROJECT) values ($1, $2) RETURNING *`, [id, idproject])
        res.json(newProject.rows[0])
    }

    async getProjectbyUser(req, res) {
        const id = req.query.id
        const projects = await db.query(`select * from project where ID_DEP_CLIENT = $1`, [id])
        res.json(projects.rows)
    }
}

module.exports = new ProjectController()
