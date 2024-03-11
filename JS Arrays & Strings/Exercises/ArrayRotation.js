function solve(numbers, countOfRotation){
    
    for (let i = 1; i <= countOfRotation; i++) {
        
        numbers.push(numbers.shift());
    }

    console.log(numbers.join(' '));

}



solve([51, 47, 32, 61, 21], 2);