//DOM Query
const movieListElement = document.getElementById('movies');
const firstMovieElement = document.querySelector('.first-movie');

// Create Element
const secondMovieElemnt = document.createElement('li');
secondMovieElemnt.textContent = 'Man of Steel';

// Append new element to DOM
movieListElement.appendChild(secondMovieElemnt);

// Append existing element to DOM - отива на последно място
setTimeout(() => {
    movieListElement.appendChild(firstMovieElement);
}, 3000)

// Clone existing element and prepend

//const firstMovieCloneElement = firstMovieElement.cloneNode(); // създава нов елемент, клонира се елемента с неговите атрибути, но без съдържанието 
const firstMovieCloneElement = firstMovieElement.cloneNode(true); //клонира не  само елемента, но и всичките му деца, цялото дърво надолу
firstMovieCloneElement.textContent = 'Pasion of Christ';
//movieListElement.appendChild(firstMovieCloneElement);
movieListElement.prepend(firstMovieCloneElement); // ще го сложи на първо място

// Append element on specific place before another child element
const thirdMovieElemnt = document.createElement('li');
thirdMovieElemnt.textContent = 'Lord of the Rings';

movieListElement.insertBefore(thirdMovieElemnt, secondMovieElemnt); // през parent

//Use bofore or after 
const fourthMovieElemnt = document.createElement('li');
fourthMovieElemnt.textContent = 'The Case for Christ';

thirdMovieElemnt.after(fourthMovieElemnt); // може да се сложат повече от един елемент(също и с before)

 