function solve(startingYield){

    let totalAmount = 0;
    let expected = startingYield;
    let dayCount = 0;
    let rest = 0;
    

    while (expected >= 100) {
        dayCount++;

        rest= expected -26;
        
        totalAmount += rest;

        expected -= 10;
    }

    if(totalAmount >= 26){
        totalAmount -= 26;
    }

    console.log(dayCount);
    console.log(totalAmount);

}
solve(450);