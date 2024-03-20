function getOperation(operator){
    
    switch (operator) {
        case 'multiply':
        return (a, b) => a * b;
        case 'divide':
        return (a, b) => a / b;
        case 'add':
        return (a, b) => a + b;
        case 'subtract':
        return (a, b) => a - b;
    }
}


function solve(numOne, numTwo, operator){
    const operation = getOperation(operator);
    
    const result = operation(numOne, numTwo);
    
    console.log(result);
}

solve(5,
    5,
    'multiply'
    )
    
//------------------------------------    
    
function fancySolve(a, b, operator){
    const operation = {
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
        add: (a, b) => a + b,
        substract: (a, b) => a - b,
    }
    
    
    console.log(operation [operator](a, b));
}

fancySolve(5,
    5,
    'multiply'
    )    