// build your `/api/projects` router here
const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
    res.send(`<h2>This is the project-router</h2>`);
})

module.exports = router;