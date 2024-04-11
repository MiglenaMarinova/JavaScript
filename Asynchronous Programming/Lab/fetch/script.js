const booksUrl = 'http://localhost:3030/jsonstore/collections/books';

// Using server to get books
fetch(booksUrl)
.then((response) => response.json())
.then(data => console.log(data))
.catch(err => console.log(err));

//create book
//fetch(booksUrl, {
//    method: 'POST',
//    headers: {
//        'content-type': 'application/json'
//    },
//    body: JSON.stringify({
//        title: 'Chronicles of Narnia',
//        author: 'C.S Lewis',        
//    })
//})
//    .then(response => response.json())
//    .then(data => console.log(data))
//    .catch(err => console.log(err));


// Edit book
// The Lion, the Witch and the Wordrope
//fetch(`${booksUrl}/88f15e88-5b65-4426-a3f7-24dc2d5b26ae`, {
//
//    method: 'PUT',
//    headers: {
//        'content-type': 'application/json'
//    },
//    body: JSON.stringify({
//        "title": "Chronicles of Narnia: The Lion, the Witch and the Wordrope",
//        "author": "C.S Lewis",
//        //"_id": "88f15e88-5b65-4426-a3f7-24dc2d5b26ae"
//    })
//
//});

// Delete book
fetch(`${booksUrl}/adeb42af-2285-49b5-8f2c-a04606429f1e`, {
    method: 'DELETE'
});





