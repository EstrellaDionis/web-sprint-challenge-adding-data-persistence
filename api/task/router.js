// build your `/api/tasks` router here
const express = require('express')
const taskModel = ('./model.js')

const router = express.Router();


router.get('/', async (req, res) => {
    try {
    const results = await taskModel.get()
    res.send(results)
    } catch (err) {
        res.send(err)
    }
})

router.post('/', (req, res) => {
    res.send(`<h2>This is the project-router</h2>`);
})

module.exports = router;