"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

/* getting all posts from api */
var fetchPosts = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var resultArray, response, data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        resultArray = [];
                        _context.next = 3;
                        return fetch(apiUrl);

                    case 3:
                        response = _context.sent;

                        if (response.ok) {
                            _context.next = 6;
                            break;
                        }

                        throw new Error("HTTP error! status: " + response.status);

                    case 6:
                        _context.next = 8;
                        return response.json();

                    case 8:
                        data = _context.sent;

                        if (!(data.length > 0)) {
                            _context.next = 13;
                            break;
                        }

                        data.forEach(function (_ref2) {
                            var id = _ref2.id,
                                title = _ref2.title,
                                content = _ref2.content;
                            return resultArray.push({ id: id, title: title, content: content });
                        });
                        _context.next = 14;
                        break;

                    case 13:
                        throw new Error("Empty data result!");

                    case 14:
                        return _context.abrupt("return", resultArray);

                    case 15:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function fetchPosts() {
        return _ref.apply(this, arguments);
    };
}();

/* getting all comments by post id ( random comment ) */


var fetchCommentsOfPost = function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var postId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var resultArray, response, data, length, randNum, getPost;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        resultArray = [];
                        _context2.next = 3;
                        return fetch(apiUrl);

                    case 3:
                        response = _context2.sent;

                        if (response.ok) {
                            _context2.next = 6;
                            break;
                        }

                        throw new Error("HTTP error! status: " + response.status);

                    case 6:
                        _context2.next = 8;
                        return response.json();

                    case 8:
                        data = _context2.sent;

                        if (!(data.length > 0)) {
                            _context2.next = 15;
                            break;
                        }

                        if (!postId) {
                            length = data.length;
                            randNum = Math.floor(Math.random() * length);

                            postId = data[randNum].id;
                        }
                        getPost = data.filter(function (_ref4) {
                            var id = _ref4.id;
                            return id === postId;
                        });

                        if (getPost.length > 0) {
                            getPost[0].comments.forEach(function (_ref5) {
                                var author = _ref5.author,
                                    content = _ref5.content;
                                return resultArray.push({ author: author, content: content });
                            });
                        }
                        _context2.next = 16;
                        break;

                    case 15:
                        throw new Error("Empty data result!");

                    case 16:
                        return _context2.abrupt("return", resultArray);

                    case 17:
                    case "end":
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function fetchCommentsOfPost() {
        return _ref3.apply(this, arguments);
    };
}();

/* getting all comment's reactions by post id ( random reactions ) */


var fetchReactionsOfComment = function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var postId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "c3cf4a9d-95c6-568c-89c7-07d9c5d6c35b";
        var resultArray, reactions, response, data, getPost, length, randNum;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        resultArray = [];
                        reactions = [];
                        _context3.next = 4;
                        return fetch(apiUrl);

                    case 4:
                        response = _context3.sent;

                        if (response.ok) {
                            _context3.next = 7;
                            break;
                        }

                        throw new Error("HTTP error! status: " + response.status);

                    case 7:
                        _context3.next = 9;
                        return response.json();

                    case 9:
                        data = _context3.sent;

                        if (!(data.length > 0)) {
                            _context3.next = 15;
                            break;
                        }

                        getPost = data.filter(function (_ref7) {
                            var id = _ref7.id;
                            return id === postId;
                        });

                        if (getPost.length > 0) {
                            length = getPost[0].comments.length;
                            randNum = Math.floor(Math.random() * length);

                            getPost[0].comments.forEach(function (_ref8) {
                                var reactions = _ref8.reactions;
                                return resultArray.push({ reactions: reactions });
                            });
                            reactions = resultArray[randNum].reactions;
                        }
                        _context3.next = 16;
                        break;

                    case 15:
                        throw new Error("Empty data result!");

                    case 16:
                        return _context3.abrupt("return", reactions);

                    case 17:
                    case "end":
                        return _context3.stop();
                }
            }
        }, _callee3, this);
    }));

    return function fetchReactionsOfComment() {
        return _ref6.apply(this, arguments);
    };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var apiUrl = "./postData.json";

function wait(milliseconds) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, milliseconds);
    });
}

exports.wait = wait;
exports.fetchPosts = fetchPosts;
exports.fetchCommentsOfPost = fetchCommentsOfPost;
exports.fetchReactionsOfComment = fetchReactionsOfComment;
//# sourceMappingURL=api.js.map