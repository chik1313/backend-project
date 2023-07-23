const Router = require('express')
const router = new Router()
const projectController = require('../controllers/project.controller')

router.post('/project', projectController.createProject)
router.get('/project', projectController.getProjectbyUser)


module.exports = router
