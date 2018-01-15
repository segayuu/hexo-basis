'use strict';
/**
 * Created by tumugu2 on 2017/01/13.
 */

/* globals hexo */
const assert = require('assert');
assert.ok(hexo.extend.helper.register);

hexo.extend.helper.register('isDisplaySidebar', function () {
    assert.ok(this.theme);
    const config = this.theme;
    return config.header && config.header.overlay;
});