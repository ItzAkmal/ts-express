"use strict";
exports.__esModule = true;
var express = require("express");
var morgan = require("morgan");
var helmet = require("helmet");
var cors = require("cors");
require('dotenv').config();
var middlewares_1 = require("./middlewares");
var api_1 = require("./api");
var app = express();
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.get('/', function (req, res) {
    res.json({
        message: 'Hello World'
    });
});
app.use('/api', api_1["default"]);
app.use(middlewares_1["default"].notFound);
app.use(middlewares_1["default"].errorHandler);
exports["default"] = app;
