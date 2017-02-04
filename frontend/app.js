"use strict";

let moduleName = location.pathname.slice(1);

let handler;
try {
    handler = require('bundle!./routes/' + moduleName);
} catch (e) {
    alert('No such path');
}

if (handler) {
    handler(function (route) {
        route();
    });
}