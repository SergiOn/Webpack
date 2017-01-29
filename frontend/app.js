"use strict";

document.getElementById('loginButton').onclick = function () {

    // ======== Способ 1 (require.ensure) ==
    // require.ensure(['./login'], function (require) {
    require.ensure([], function (require) {
        let login = require('./login');

        login();
    });

};

document.getElementById('logoutButton').onclick = function () {

    // ======== Способ 1 (require.ensure) ==
    // require.ensure(['./login'], function (require) {
    require.ensure([], function (require) {
        let logout = require('./logout');

        logout();
    });

};