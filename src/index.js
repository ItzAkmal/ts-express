"use strict";
exports.__esModule = true;
var app_1 = require("./app");
var PORT = process.env.PORT || 5000;
app_1["default"].listen(PORT, function () {
    console.log("Listening: http://localhost:" + PORT);
});
