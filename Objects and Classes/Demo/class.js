class Person{

    type = 'Employee';

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName; 
        this.age = age;
    }

    greet(to){
        console.log(`${this.firstName} says hello to ${to}`);
    }

    greeting(to){
        console.log(`${this.firstName} says hello to ${to.firstName}`);
    }
}

const person = new Person ('Pesho', 'Ivanov');
const person2 = new Person('Gosho', 'Goshev');
console.log(person);
console.log(person2);
console.log(typeof person);
console.log(person instanceof Person);
console.log(person instanceof Object);

person.greet('Sasho');
person2.greet('Sasho');

person.greeting(person2);
person2.greeting(person); 

