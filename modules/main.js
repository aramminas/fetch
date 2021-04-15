import {wait, fetchPosts, fetchCommentsOfPost, fetchReactionsOfComment} from "./api.js";

function onLoad(){
    fetchPosts()
        .then(data => {
            console.log('fetchPosts()', data)
        })
        .then(() => wait(2000))
        .then(fetchCommentsOfPost)
        .then(data => {
            console.log('fetchCommentsOfPost()', data)
        })
        .then(() => wait(3000))
        .then(fetchReactionsOfComment)
        .then(data => {
            console.log('fetchReactionsOfComment()', data)
        });
}

onLoad();