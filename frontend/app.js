"use strict";

let moduleName = location.pathname.slice(1);

let route = require('./' + moduleName);
route();