// build your `/api/resources` router here
const express = require('express')
const resourceModel= require('./model')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
    const data = await resourceModel.get()
    res.send(data)
    } catch (err) {
        res.send(err.message)
    }
})

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
            res.send(500)
        }
})

module.exports = router;