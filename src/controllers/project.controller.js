const db = require('../db')
class ProjectController {
    async createProject(req, res) {
        const {id,currentdate} = req.body
        const projects = await db.query(`SELECT * FROM project WHERE ID_DEP_CLIENT = $1 ORDER BY id_current_project DESC`, [id])
        let lastId = projects.rows.length > 0 ? projects.rows[0].id_current_project + 1 : 0
        const idProjectName = `${lastId+1}-${id}-${currentdate}`
        const newProject = await db.query(`INSERT INTO project (ID_DEP_CLIENT, ID_PROJECT, id_current_project ) values ($1, $2, $3) RETURNING *`, [id, idProjectName, lastId])
        res.json(newProject.rows[0])

    }

    async getProjectbyUser(req, res) {
        const id = req.query.id
        const projects = await db.query(`select * from project where ID_DEP_CLIENT = $1`, [id])
        res.json(projects.rows)
    }
}

module.exports = new ProjectController()
