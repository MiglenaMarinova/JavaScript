function findTheSmallestNumber (num1, num2, num3){
    let smallestNum = Number.MAX_SAFE_INTEGER;
    
    if(num1 < smallestNum){
        smallestNum = num1;
    }
    if(num2 < smallestNum){
        smallestNum = num2;
    }
    if(num3 < smallestNum){
        smallestNum = num3;
    }

    console.log(smallestNum);
}

//----------------------------------------

function matMin(numbers){
    let minNumber = Number.MAX_SAFE_INTEGER;

    for(const number of numbers){
        if(minNumber > number){
            minNumber = number
        }
    }

    return minNumber;
}

function solve(a, b, c){
    const result = matMin([a, b, c]);

    console.log(result);
}

solve(25,
    21,
    4
    )

findTheSmallestNumber(600,
    342,
    123     
    )
 






