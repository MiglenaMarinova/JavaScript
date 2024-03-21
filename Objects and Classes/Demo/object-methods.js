// Define method in object literal
const cat = {
    name: 'Navcho',
    breed: 'Persian', 
    age: 9,
    grades: [5,6,5,6],       //може да съдържа масив като стойност
    owner: {                 //може да съдържа и нестнат обект
        name: 'Ivo', 
        age: 24,
    },
    //Function expression value  
    makeSound: function() {         //може да съдържат функции, които тук се наричат методи
        console.log('Meao....');
    },
    //Arrow function
    sleeep: () => console.log('zzzzZzzz...'),
}


// Call method
let methodName = 'makeSound';
cat.makeSound();
cat['makeSound']();
cat[methodName]();

// Add method dynamically
cat.eat = function(){
    console.log('Omnomnomnon...');
}
cat.eat2 = () => console.log('Omnomnom');

// Use method notation syntax
const dog = {
    name: 'Sharo',
    breed: 'Ulichna',
    makeSound(){
        console.log('Wof wof...');
    },
    ownerName: 'Pesho',
}

// Get all property names of an object
const propertyNames = Object.keys(cat);
console.log(propertyNames);

// Get all property values of an object
const propertyValues = Object.values(cat);
console.log(propertyValues);

// Get object key values pairs
const simpleObject = {
    name: 'Pesho',
    age: 20,
}
const entries = Object.entries(simpleObject);
console.log(entries);   // връща масив от масиви, като всеки масив е двойка key value [['name', 'Pesho'], ['age', 20]]

// Reverse entries
const originalSimpleObject = Object.fromEntries(entries);
console.log(originalSimpleObject);


//
for(let key in cat){
    console.log(key);
}

// Check for method and call
cat.makeSound && cat.makeSound();