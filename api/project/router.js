// build your `/api/projects` router here
const express = require('express')
const projectModel = require('./model')

const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
    const results = await projectModel.get(req.params.id)
    res.send(results)
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