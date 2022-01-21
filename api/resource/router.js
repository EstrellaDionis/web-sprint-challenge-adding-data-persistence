// build your `/api/resources` router here
const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
    res.send(`<h2>This is the resource-router</h2>`);
})

module.exports = router;