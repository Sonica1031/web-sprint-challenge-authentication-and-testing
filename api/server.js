const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');
const session = require('express-session');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use(
    session({
        name: 'notsession',
        secret: 'Gottah Keep It',
        Cookie: {
            maxAge: 1 * 24 * 60 * 60 * 1000,
            secure: true,
        },
        httpOnly: true,
        resave: false,
        saveUninitialized: false,
    })
);

server.use('/api/auth', authRouter);
server.use('/api/jokes', jokesRouter);

module.exports = server;
