"use strict";

let map = require('lodash/map');

let users = [
    {id: "abcd", name: "Vasya"},
    {id: "defa", name: "Petya"},
    {id: "1234", name: "Masha"}
];

console.log( map(users, 'name') );