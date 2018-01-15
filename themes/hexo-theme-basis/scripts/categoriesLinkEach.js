/**
 * Created by tumugu2 on 2016/12/15.
 */
/* globals hexo */

// category foreach helper
// <% categoriesEach(data => { %>
//   <li><%= data.name %></li>
// <% }) %>

const assert = require('assert');
assert.ok(hexo.extend.helper.register);
assert.ok(hexo.locals.get);

hexo.extend.helper.register('categoriesEach', func => {
    if (typeof func !== 'function') throw new TypeError();
    const model = hexo.locals.get('categories');
    if (model.count() === 0) {
        return;
    }
    model.forEach(data => {
        //data.toObject()はplainのobjectを返します。
        const obj = data.toObject();
        //postsはQueryの配列なのでidに平滑化します。
        //全プロパティがプリミティブになったのでJSONに変換可能になります。
        delete obj.posts;
        obj.posts_id = data.posts.map(post => post._id);
        func(obj);
    });
});