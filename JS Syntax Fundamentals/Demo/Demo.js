// Declare variables
let a = 5;
let b = 10;

if(a < b){
    console.log(b);
}

// Reassign variable defined with let
a = 15;
console.log(a+b);

var c=10; // Before ES2015
console.log(b+ c);


const pi = 3.14159265359;  //Когато не искаме да ни се променя стойността

// Conditional Statements

if(a < 10){
    console.log('a is lower than 10')
}else if (a = 10){
    console.log('a is equal to 10')
}else{
    console.log('I don not know')
}

// Function Delaration

function add(a , b){
    console.log(a + b);
}

// Function Invocation

add(a, b);

// Console print with string concatenation
console.log('The nuber is: ' + pi + ' !')

// String interpolation / template literal `` 
console.log(`The number pi is: ${pi}`)

// Fix the number output
console.log(pi.toFixed(2))