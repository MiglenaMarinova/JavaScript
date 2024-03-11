//Index of
let text = 'I am JavaScript developer';
let indexOfJava = text.indexOf('Java');
console.log(indexOfJava);

//Substring
let theBestLanguage = text.substring(indexOfJava, 15);
console.log(theBestLanguage);

//Replace
let csharpDevText = text.replace('JavaScript', 'C#');
console.log(csharpDevText);

//Split
let words = text.split(' ');
console.log(words);

//Includes
console.log(text.includes('developer'));

//Repeat
console.log('Tro ' + 'lo '.repeat(10));

// Check string start and end
console.log(text.startsWith('I am'));

//Pad string -да запълни стринга до толкова знаци, колкото сме му казали
console.log('10'.padStart(10, 'x'));
console.log('10'.padStart(8, '0'));
console.log('10101'.padStart(8, '0'));
console.log('10111010'.padStart(8, '0'));

//Reverce string
let revercedString = text
                    .split('')
                    .reverse()
                    .join('');
console.log(revercedString);