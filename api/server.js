const express = require('express');
const cors = require('cors');
const projectsRouter = require('./project/router');

const server = express();

server.use(cors());

server.use(express.json());

function logger(req, res, next){
    console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} ${req.get('Origin')}`);
    next();
}

server.use(logger);

server.use('/api/project', projectsRouter)

server.use('/', (req, res) => {
    res.send(`<h2>web-sprint-challenge-adding-data-persistence</h2>`);
})

server.use('*', (req, res, next) => {//eslint-disable-line
    res.json(404).json({ message: `${req.method} ${req.baseUrl} not found!`});
})

server.use((err, req, res, next) => { // eslint-disable-line
    console.log('OOPS!')
    res.status(err.status || 500).json({
        message: `ERROR: ${err.message}`,
    })
})

module.exports = server