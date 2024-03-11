function solve(array, step){

    let result = [];

    for (let i = 0; i < array.length; i+=step) {
        result.push(array[i]);
    }

    return result;
}

function quickSolve(array, step){
    const result = array.filter((element, index) => index % step === 0);

    return result;
}

solve(['dsa',
'asd', 
'test', 
'tset'], 
2

)