function attachEvents() {
    const postUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';
    const loadPostsButton = document.getElementById('btnLoadPosts');
    const viewPostsButton = document.getElementById('btnViewPost');
    const selectElement = document.getElementById('posts');
    const postBodyElement = document.getElementById('post-body');
    const commentUlElement = document.getElementById('post-comments');
    const postTitleElement = document.getElementById('post-title');

    let allPosts = {};

    loadPostsButton.addEventListener(('click'), async () => {
        selectElement.innerHTML = ''; 

        const response = await fetch(postUrl);
        allPosts = await response.json(); 

        for (const [postId, postObj] of Object.entries(allPosts)) {
            const optionElement = document.createElement('option');
            optionElement.value = postId;
            optionElement.textContent = postObj.title;
            selectElement.appendChild(optionElement);
        }

    });

    viewPostsButton.addEventListener('click', async () => {
        postBodyElement.innerHTML = '';
        commentUlElement.innerHTML = '';

        const postId = selectElement.value;

        postBodyElement.textContent = allPosts[postId].body;
        postTitleElement.textContent = allPosts[postId].title;
        
        const commentResponse = await fetch(commentsUrl);
        const comments = await commentResponse.json();

        const postComments = Object.values(comments)
            .filter(comment => comment.postId === postId);
        postComments.forEach(comment => {
            const liCommentElement = document.createElement('li');
            liCommentElement.id = comment.id;
            liCommentElement.textContent = comment.text
            commentUlElement.appendChild(liCommentElement);
        });    
            
            //commentUlElement.append(...postComments);
    });
}

attachEvents();