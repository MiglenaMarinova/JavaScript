function mathPower(number, power){
    let result = 1;

    for (let i = 0; i < power; i++) {
        result *= number;
        
    }

    return result;
}


function solve(number, power){
    
    console.log(mathPower(number, power));
   
}

solve(3,4)
