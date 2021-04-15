const apiUrl = "./postData.json";

/* getting all posts from api */
async function fetchPosts() {
    const resultArray = [];
    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if(data.length > 0){
        data.forEach(({id, title, content}) => resultArray.push({id, title, content}));
    } else {
        throw new Error(`Empty data result!`);
    }
    return resultArray;
}

/* getting all comments by post id ( random comment ) */
async function fetchCommentsOfPost(postId = "") {
    const resultArray = [];
    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if(data.length > 0){
        if(!postId){
            let length = data.length;
            let randNum = Math.floor(Math.random() * length);
            postId = data[randNum].id;
        }
        const getPost = data.filter(({id}) => id === postId);
        if(getPost.length > 0){
            getPost[0].comments.forEach(({author, content}) => resultArray.push({author, content}));
        }
    } else {
        throw new Error(`Empty data result!`);
    }
    return resultArray;
}

/* getting all comment's reactions by post id ( random reactions ) */
async function fetchReactionsOfComment(postId = "c3cf4a9d-95c6-568c-89c7-07d9c5d6c35b") {
    const resultArray = [];
    let reactions = [];
    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if(data.length > 0){
        const getPost = data.filter(({id}) => id === postId);
        if(getPost.length > 0){
            let length = getPost[0].comments.length;
            let randNum = Math.floor(Math.random() * length);
            getPost[0].comments.forEach(({reactions}) => resultArray.push({reactions}));
            reactions = resultArray[randNum].reactions;
        }
    } else {
        throw new Error(`Empty data result!`);
    }

    return reactions;
}

function wait(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}

export {
    wait,
    fetchPosts,
    fetchCommentsOfPost,
    fetchReactionsOfComment
};