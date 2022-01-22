// build your `/api/resources` router here
const express = require('express')
const resourceModel= require('./model')

const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        const results = await resourceModel.get(req.params.id)
        res.send(results)
        } catch (err) {
            res.send(err.message)
        }
})

router.post('/', async (req, res) => {
    try {
        const results = await resourceModel.insert(req.body)
            res.send(results)
        } catch (err) {
            res.send(err.message)
        }
})

module.exports = router;