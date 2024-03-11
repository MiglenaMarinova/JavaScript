function solve(array){
let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0){
        sumEven += array[i];
    }else{
        sumOdd += array[i];
    }
    
}
console.log(sumEven - sumOdd);

}

function solveSum(numbers){
    let oddNumbers = numbers.filter(num => num % 2 !== 0);
    let evenNumners = numbers.filter(num => num % 2 ===0);

    let OddSum = oddNumbers.reduce((a, b) => a + b, 0);
    let evenSum = evenNumners.reduce((a, b) => a + b, 0);

    console.log(evenSum - OddSum);
}

function solve2(numbers){
    let result = numbers.reduce((sum, num) => num % 2 ===0 ? sum + num : sum - num, 0);

    console.log(result);

}

solve([3,5,7,9])