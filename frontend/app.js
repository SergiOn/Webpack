"use strict";

let moduleName = location.pathname.slice(1);

let context = require.context('./routes', false);

let route = context('./' + moduleName);
route();