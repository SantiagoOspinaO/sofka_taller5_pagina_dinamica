const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

/**
 * Conexion con la base de datos MongoDB
 */
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.error(error));

const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Server listening on port', port);
});

/**
 * View engine setup
 */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/**
 * Middlewares
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes
 */
app.use('/', require('./routes/index'));
app.use('/createGame', require('./routes/create-game'));
app.use('/game', require('./routes/consult-game-status'));
app.use('/startGame', require('./routes/start-game'));

module.exports = app;
