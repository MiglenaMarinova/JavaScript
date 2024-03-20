function findEvenSum(number){
    let sum = 0;
    let arrNum = number.toString().split('');
        
    for (let i = 0; i < arrNum.length; i++) {
        if(arrNum[i] % 2 ===0 ){
            sum += Number(arrNum[i]);
        }        
    }  

    return sum;
}

function findOddSum(number){
    let sum = 0;
    let arrNum = number.toString().split('');
        
    for (let i = 0; i < arrNum.length; i++) {
        if(arrNum[i] % 2 !==0 ){
            sum += Number(arrNum[i]);
        }        
    }  

    return sum;
}

function solve(number){    
    
    const result = `Odd sum = ${findOddSum(number)}, Even sum = ${findEvenSum(number)}`;

    console.log(result);
}

solve(3495892137259234)