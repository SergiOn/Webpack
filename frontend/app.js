"use strict";

let moduleName = location.pathname.slice(1);

let route = require('./routes/' + moduleName);
route();