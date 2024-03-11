function solve(num){

    let lastDigit;
    let result = 0;

    while(num > 0){

        lastDigit = num % 10;
        result += lastDigit;

        num= num / 10 - lastDigit /10;
    }

    console.log(result);
}

solve(245678);

// function solve(num){
//  let sum = 0;

//while(num > 0){

 //  sum += num % 10;

 //  num= Math.trunc(num / 10);
//}
//
//console.log(sum);
//}