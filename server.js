const express = require('express');

const projectRouter = require('./projects/projects-router');

const server = express();

server.use(express.json());

server.use('/projects', projectRouter);

server.get('/', (req, res) => {
    res.send('<h3> Rock n rolling </h3>');
  });

module.exports = server;