// build your `/api/tasks` router here
const express = require('express')
const taskModel = require('./model.js')

const router = express.Router();


router.get('/', async (req, res) => {
    try {
    const data = await taskModel.get(req.params.id)
    const result = data.map((task) => {
        return { ...task, task_completed: Boolean(task.task_completed) }
    })
    res.send(result)
    } catch (err) {
        res.send(err.message)
    }
})

router.get('/:id', async (req, res) => {
    try {
    const data = await taskModel.get(req.params.id)
    const result = { ...data, task_completed: Boolean(data.task_completed)}
    res.send(result)
    } catch (err) {
        res.send(err.message)
    }
})

router.post('/', async (req, res) => {
    try {
    const data = await taskModel.insert(req.body)
    const result = { ...data, task_completed: Boolean(data.task_completed)}
        res.send(result)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router;