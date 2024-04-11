const decrementButtonElemnt = document.getElementById('decrement-button');
const countElemnt = document.getElementById('count');
const resetButtonElement = document.getElementById('reset-button');

// Using DOM event handler - preferred method

//resetButtonElement.addEventListener('click', (event) => { // подава се само името на event-а без on 
//
//    countElemnt.textContent = 0;
//
//})  - така няма да можем да вземем рефенция към функцията, ако искаме да я премахнем после

const eventListener = (event) => {
    countElemnt.textContent = 0;
}
resetButtonElement.addEventListener('click', eventListener);


// Using DOM element properties
decrementButtonElemnt.onclick = function(event){    

    countElemnt.textContent = Number(countElemnt.textContent) - 1;
}


// With HTML Attributes
function onIncrement(event){   

    countElemnt.textContent = Number(countElemnt.textContent) + 1;
}

// Remove eventListener for rest after 10 seconds
setTimeout(() =>{
    resetButtonElement.removeEventListener('click', eventListener) // трябва да се подаде какъв е типа на event и рефенция на функцията, което е самият eventListener
}, 10000);


// Use input event
const inputNumberElement = document.getElementById('number');
inputNumberElement.addEventListener('input', (event) => {
    //inputNumberElement.value === event.target.value; 
    countElemnt.textContent = event.target.value;
})

// Multiple listeners
resetButtonElement.addEventListener('click', (event) => {
    inputNumberElement.value = '';
});

