


function solve (first, second, third){

    function sum (a, b){
        return a + b;
    }
    
    function substract (a, b){
        return a - b;
    }

const result = substract(sum(first, second), third);

console.log(result);

}

solve(1,
    17,
    30
    )