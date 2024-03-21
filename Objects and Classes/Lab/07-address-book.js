function solve(input){

    const person = {};

    for(let line of input){
        const[name, address] = line.split(':');
        person[name] = address;
    }

    let sordedPerson = Object.entries(person)
    .sort((a, b) => a[0].localeCompare(b[0]));

    for(let name in Object.fromEntries(sordedPerson)){
        console.log(`${name} -> ${Object.fromEntries(sordedPerson)[name]}`);
    }
}

function solveWithReduce(input){

    const addressBook = input.reduce((book, line) => {
        const[name, address] = line.split(':');

        book[name] = address;

        return book;
    }, {})

    Object.entries(addressBook)
    .sort((a,b) => a[0].localeCompare(b[0]))
    .forEach(([name, address]) => console.log(`${name} -> ${address}`));
}

function solveWithForEach(input){
    const addressBook = {};

    input.forEach(line => {
        const[name, address] = line.split(':');

        addressBook[name] = address;
    });


    Object.entries(addressBook)
    .sort((a,b) => a[0].localeCompare(b[0]))
    .forEach(([name, address]) => console.log(`${name} -> ${address}`));
}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)
solveWithForEach(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)
solveWithReduce(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)
