function solve(num1, num2){
    
    const divideResult = calculateFactorial(num1) / calculateFactorial(num2);

    console.log(divideResult.toFixed(2));
}

function calculateFactorial(num){
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;        
    }

    return result;
}

solve(6,
    2
    )