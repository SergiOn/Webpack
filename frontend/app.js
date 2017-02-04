"use strict";

let moment = require('moment');

let today = moment(new Date()).locale('uk');

alert(today.format('DD MMM YYYY'));