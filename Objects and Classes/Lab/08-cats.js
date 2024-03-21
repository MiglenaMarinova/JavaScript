function solve(input){

    class Cat  {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow `);
        }
    }

    for (let record of input){
        let name = record.split(' ')[0];
        let age = record.split(' ')[1];
        let cat = new Cat(name, age);
        cat.meow();
    }

}

function solveWithMap(input){
    class Cat  {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow `);
        }
    }

    input
        .map(line => line.split(' '))
        .map(([name, age]) => new Cat(name, age))
        .forEach(cat => cat.meow())
}

solve(['Mellow 2', 'Tom 5'])

solveWithMap(['Mellow 2', 'Tom 5'])