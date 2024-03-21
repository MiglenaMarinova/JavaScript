function solve(input){
    const person = {};

    for (let i = 0; i < input.length; i++) {
        person.name = input[i];
        person.number = input[i].length;
        
        console.log(`Name: ${person.name} -- Personal Number: ${person.number}`);
    }
}

function solve1(input){
    const persons = {};

    for (let i = 0; i < input.length; i++) {
        let name = input[i];
        let number = input[i].length;
        
        persons[name] = number;
    }

    for(let person in persons){
        console.log(`Name: ${person} -- Personal Number: ${persons[person]}`);
    }


}

function solve2(input){
    let employees = {};

    for(let name of input){
        employees[name] = name.length;
    }

    for(let employeeName in employees){
        console.log(`Name: ${employeeName} -- Personal Number: ${employees[employeeName]}`);
    }
}

function fancySolve(employeeNames){
    const employees = [];

    for(const name of employeeNames){
        const employee = {
            name,
            personalNumber: name.length,
        }

        employees.push(employee);
    }

    for (const employee of employees) {
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }
     
}

function fanciesSolve(employeeNames){
    employeeNames
        .map(name => {
            const employee = {
                name,
                personalNumber: name.length,
            };
            return (employee)
        })
        .forEach(employee => console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`))
}

function fanciesSolve2(employeeNames){
    employeeNames
        .map(name => {
            return {
                name,
                personalNumber: name.length,
            };
        })
        .forEach(employee => console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`))
}

function fanciesSolve3(employeeNames){
    employeeNames
        .map(name => ({    // за да взрнем директно обекта, трябва да оградим в скоби, за да подскажем, че това не е боди на функция, не е statement, а expression
                name,
                personalNumber: name.length,
            })
        )
        .forEach(employee => console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`))
}



solve1([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )