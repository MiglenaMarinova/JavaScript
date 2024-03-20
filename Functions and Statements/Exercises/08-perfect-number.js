function solve(number){

    const resultSum = findDivisors(number).reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0,
    );

    if (resultSum === number) {
        console.log("We have a perfect number!");
    }else{
        console.log("It's not so perfect.");
    }

}

function findDivisors(number){
    let arrayDivisors = [];

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            arrayDivisors.push(i);
        }
        
    }
    return arrayDivisors;
}



solve(1236498)