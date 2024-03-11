function solve(numbers){

    numbers.sort((a,b) => a-b);

    let copyArray = numbers.slice();
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        if(i % 2 === 0){
            result.push(copyArray.shift());
        }else{
            result.push(copyArray.pop())
        }
        
    }

    return result;
}

function solve2(numbers){
    numbers.sort((a,b) => a-b);
    let result = [];

    while(numbers.length > 0){
        let firstNum = numbers.shift();
        let lastNum = numbers.pop();

        result.push(firstNum);

        if(lastNum){
            result.push(lastNum);
        }
    }

    return result;
}

solve2([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])