"use strict";
exports.__esModule = true;
var notFound = function (req, res, next) {
    res.status(404);
    var error = new Error("\uD83D\uDD0D - Not Found - " + req.originalUrl);
    next(error);
};
var errorHandler = function (err, req, res, next) {
    var statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack
    });
};
exports["default"] = { notFound: notFound, errorHandler: errorHandler };
