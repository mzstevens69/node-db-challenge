const express = require('express');

const projectRouter = require('../projects/project-router');

const server = express();

server.use(express.json());

server.use('/projects', projectRouter);

server.get('/', (req, res) => {
    res.send('<h3>Rock n roll</h3>');
  });

module.exports = server;