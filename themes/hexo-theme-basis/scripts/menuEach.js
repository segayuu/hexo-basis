'use strict';
/**
 * Created by tumugu2 on 2017/01/13.
 */
/* globals hexo */

// menu each helper
// <% menuEach((item, key, menu) => { %>
//   <li>item</li>
// <% }) %>
const assert = require('assert');
assert.ok(hexo.extend.helper.register);

hexo.extend.helper.register('menuEach', function (fn) {
    const menu = this.theme.menu;
    if (typeof menu === 'object') {
        for (let key of Object.keys(menu)){
            fn(menu[key], key, menu);
        }
    }
});