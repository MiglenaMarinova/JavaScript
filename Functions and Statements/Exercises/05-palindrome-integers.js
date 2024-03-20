
function solve(numbers){
    
    numbers.forEach(num => printResult(num));
}

function checkIfPalindrome(num){
    let forwardNum = num.toString();
    let backwardNum = forwardNum.split('').reverse().join('');

    return forwardNum === backwardNum;
}

function printResult(num){
    const result = checkIfPalindrome(num);
    console.log(result);
}
solve([32,2,232,1010])