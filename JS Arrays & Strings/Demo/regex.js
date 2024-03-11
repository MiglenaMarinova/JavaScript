let text = 'I am JavaScript developer, JavaScript is awesome';

//RegExp
let pattern = /JavaScript/ig;
//let pattern = /javaScript/;
//let pattern = /javaScript/i; -ако сложим този флаг i няма ъначение дали е с малки или големи букви

//RegExp function constructor
let pattern2 = new RegExp('JavaScript', 'g');
//let pattern2 = new RegExp('JavaScript', 'i'); -ако сложим този флаг i няма ъначение дали е с малки или големи букви


//test pattern
console.log(pattern.test(text));

console.log('----------------------');

//exec by pattern
console.log(pattern2.exec(text));
console.log(pattern2.exec(text));
console.log(pattern2.exec(text));

//String redex methods
console.log(text.match(pattern));


let pattern3 = /(java)Script/ig; // JavaScript e pattern , (java) указва групата

console.log('------pattern-+--group-------------');
const matches = text.matchAll(pattern3);
//How to count matches
//console.log((Array.from(matches)).length);
for (const match of matches) {
    console.log(match);
}


let someWord = 'Script';
let pattern4 = new RegExp(`Java${someWord}`, 'ig');
console.log(pattern4.test(text));

//Replace with regex
console.log(text.replace(/JavaScript/g, 'C#'));


