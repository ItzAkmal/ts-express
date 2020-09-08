"use strict";
exports.__esModule = true;
var express = require("express");
var router = express.Router();
router.get('/', function (req, res) {
    res.json({
        message: 'Welcome to API'
    });
});
exports["default"] = router;
