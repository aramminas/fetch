'use strict';

var _api = require('./api.js');

function onLoad() {
    (0, _api.fetchPosts)().then(function (data) {
        console.log('fetchPosts()', data);
    }).then(function () {
        return (0, _api.wait)(2000);
    }).then(_api.fetchCommentsOfPost).then(function (data) {
        console.log('fetchCommentsOfPost()', data);
    }).then(function () {
        return (0, _api.wait)(3000);
    }).then(_api.fetchReactionsOfComment).then(function (data) {
        console.log('fetchReactionsOfComment()', data);
    });
}

onLoad();
//# sourceMappingURL=main.js.map