let cars = ['BMW', 'Audi', 'Mercedess', 'Toyota', 'Honda'];
console.log(cars);

//Get last element
let lastCar = cars.pop();
console.log(lastCar);
console.log(cars);

//Mutating Methods

//Add last element
let newLenght=cars.push('Peugeot');
console.log(newLenght);

//Remove firs element
let firstCar = cars.shift();
console.log(firstCar);
console.log(cars);

//Add first element
let newUnshiftedLenght = cars.unshift('BMW');
console.log(newUnshiftedLenght);
console.log(cars);

//Splice - remove an element from array
let deletedCars = cars.splice(2, 1); //започвайки от индекс 2 изтрий 1 елемент
console.log(deletedCars);
console.log(cars);

//Splice - add an element into array
cars.splice(2, 0 , 'VW'); //отиди на позиция 2, не трий нищо и вмъкни VW
console.log(cars);

//Splice - add and remove
cars.splice(1, 3, 'Toyota', 'Audi') //отиди на позиция 1, изтрий 3 елемента и вмъкни 'Toyota', 'Audi'
console.log(cars);

//Reverce array
let revercedCars=cars.reverse();
console.log(cars);
console.log(revercedCars === cars); // една и съща референция


//Non - Mutating Methods

//Join array as String
let carsString = cars.join(', ');
console.log(carsString);

//Slice (not splice!!!)
let middleCars = cars.slice(1, 3); //взема елементите от позиция 1 (включително) до позиция 3 (без да я включва, т.е. до позиция 2 включително)
console.log(middleCars);

let shallowCopy = cars.slice();
console.log(shallowCopy === cars); // shallowCopy е вече отделен масив в паметта, с друга рефенция


//Slice from middle to end
let endCars = cars.slice(1);
console.log(endCars);

//Check if element exist
let isIncluded= cars.includes('Toyota'); //след Toyota може да се добави от кой индекс да търси
console.log(isIncluded);

//Find index of element
let toyotaIndex = cars.indexOf('Toyota'); //връща индекса на първото срещане. Ако го няма изобщо, връща -1
console.log(toyotaIndex);

//Find specific element
let toyotaElement = cars.find(car => car[0] === 'T'); 
console.log(toyotaElement);

//Find all indexes of toyotas
//let toyotaElement = cars.find(function(car){
//    return car[0] === 'T';
//});

let topCars = ['Toyota', 'BMW', 'Toyota', 'Audi'];

let tIndex = topCars.indexOf('Toyota');

while(tIndex >= 0){
    console.log(tIndex);

    tIndex = topCars.indexOf('Toyota', tIndex + 1);
}

//ForEach
cars.forEach(car => console.log(car));

let newCars = [];
cars.forEach(car=> newCars.push(car));

console.log(newCars);
console.log(cars);
console.log(newCars === cars);

//Map - създаване на производен масив, който е променен по някакво правило/критерий
let numbers = [1, 2, 3, 4, 5];
let doubleNumbers = numbers.map(number => number * 2);
console.log(numbers);
console.log(doubleNumbers);

//Filter
let oddNumbers = numbers.filter(number => number % 2 !==0);
console.log(oddNumbers);
console.log(numbers);

//Reduce
let sum = numbers.reduce((sum, number) => sum + number, 0);
console.log(sum);

//Chaining
let doubleOddNumbers = numbers
    .filter(number => number % 2 !== 0)
    .map(number => number * 2);

console.log(doubleOddNumbers);    
