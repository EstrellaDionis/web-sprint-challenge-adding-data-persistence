// build your `/api/projects` router here
const express = require('express')
const projectModel = require('./model')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
    const data = await projectModel.get(req.params.id)
    const result = data.map((project) => {
        return { ...project, project_completed: Boolean(project.project_completed) }
    })
    res.send(result)
    } catch (err) {
        res.send(err.message)
    }
})

router.get('/:id', async (req, res) => {
    try {
    const data = await projectModel.get(req.params.id)
    const result = { ...data, project_completed: Boolean(data.project_completed)}
    res.send(result)
    } catch (err) {
        res.send(err.message)
    }
})

router.post('/', async (req, res) => {
    try {
        const results = await projectModel.insert(req.body)
            res.send(results)
        } catch (err) {
            res.send(err)
        }
})


module.exports = router;