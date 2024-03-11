function solve(input){

    let lastDigit= input % 10;
    let sum = 0;
    let isSame = true;

    while(input > 0){
        let current = input % 10;

        if(current !== lastDigit){
            isSame = false;
        }
        sum += current;
        input = input/10 - current/10;
    }

    if (!isSame) {
        console.log('false');
    }else{
        console.log('true')
    }

    console.log(sum);


}

solve(1234);