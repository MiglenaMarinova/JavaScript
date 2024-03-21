let person = {
    name: 'Pesho',
    age: 20,
}

//Convert JS Object to JSON
const data = JSON.stringify(person);
//const data = JSON.stringify(person, null, 2);
console.log(data);    // it's a string


// Convert from JSON to JS object
const originalObject = JSON.parse(data);
console.log(originalObject);