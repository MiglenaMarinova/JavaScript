// Create an object
let person = { name: 'Pesho', age: 20};

// Create an object with non classic identifier
let person2 = { 'full-name': 'Ivan Ivanov'}

// Use dot syntax - ограничен за стандартни identifier
console.log(person.name);

// Use bracket syntax to get property value
console.log(person['age']); // тука вече задължително с кавички
console.log(person2['full-name']);

// Create an empty object and dynamically add values
let animal = {};

// Add with dot syntax - ако стойността я няма, ще я добави, ако я има ще я презапише
animal.name = 'Navcho';

// Add with bracket syntax
animal['min-weight'] = 2;

// Add dynamic name property
let propName = 'type';
animal[propName] = 'Cat';

console.log(animal);

// Get undefined property
console.log(animal.nonExistent); // -> undefined



// Add dynamic name property in the literal
const dynamicPropName = 'fullName';
const person3 = {
    [dynamicPropName]: 'Ivan Ivanov'
}
console.log(person3);

// Multiline object literal (over 2 properties)
let firstName = 'Ivo';
let lastName = 'Papazov';
let age = 24;

const personInfo = {
    firstName: firstName,
    lastName: lastName,
    age: age,            // нормално е да се слага запетая, след последното проперти

}

// Object literal with shorthand syntax
const shortPersonInfo = {
    firstName,
    lastName,
    age,                // нормално е да се слага запетая, след последното проперти

}

// Delete entry - това работи само обекти
delete shortPersonInfo.firstName;  
console.log(shortPersonInfo);

// Object destructuring assignment
let person4 = {name: 'Gosho', age:20}; // поредността няма значение, но имената трябва да са едни и същи
const {age: personAge, name} = person4;  // стойността на променливата name, която е 'Gosho' идва в променливата 
                                //name, стойността на age, която е 21, да дойде в пропертито age, прекръстено на 
                                //променливата personAge.



// Object destructuring assignment with rest
const {lastName: surName, ...restPersonalInfo} = shortPersonInfo
console.log(surName);
console.log(restPersonalInfo);








