const url = 'https://swapi.dev/api';

// fetch(`${url}/people/1`)
//     .then((response) => {
//         response.json()
//             .then(data => {
//                 console.log(data);
//             })
//             .catch(err => console.log(err));
//     })
//     .catch(error => {
//         console.log('Something went wrong...');
//     });


//  Promise chaining
// fetch(`${url}/people/1`) // fetch promise от response
// .then((response) => {    // получаваме го и връщаме response, конвертиран към JSON, които е нов promise 
//      return response.json();
// })
// .then(data => {          // получаваме  data, което е JSON data
//    console.log(data);
// })
// .catch(error => {
//    console.log('Something went wrong...');
// });   



fetch(`${url}/people/1`) // fetch promise от response
.then((response) => response.json())    // получаваме го и връщаме response, конвертиран към JSON, които е нов promise 
.then(data => console.log(data))          // получаваме  data, което е JSON data
.catch(error => console.log('Something went wrong...'));





     