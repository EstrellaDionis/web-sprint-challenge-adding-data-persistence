// build your `/api/tasks` router here
const express = require('express')
const taskModel = require('./model.js')

const router = express.Router();


router.get('/:id', async (req, res) => {
    try {
    const results = await taskModel.get(req.params.id)
    res.send(results)
    } catch (err) {
        res.send(err.message)
    }
})

router.post('/', async (req, res) => {
    try {
    const results = await taskModel.insert(req.body)
        res.send(results)
    } catch (err) {
        res.send(err)
    }
})

module.exports = router;