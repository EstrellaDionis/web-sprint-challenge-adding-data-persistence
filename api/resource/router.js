// build your `/api/resources` router here
const express = require('express')

const router = express.Router();

router.post('/', (req, res) => {
    res.send(`<h2>This is the resource-router</h2>`);
})

router.get('/', (req, res) => {
    res.send(`<h2>This is the resource-rtouer</h2>`)
})

module.exports = router;