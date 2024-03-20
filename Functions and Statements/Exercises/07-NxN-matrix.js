function solve(number){

    for (let i = 1; i <= number; i++) {
        console.log (printRow(number));    
    }

}

function printRow(number){
    let row = [];
    for (let i = 1; i <= number ; i++) {
        row.push(number);      
    }
    //console.log(row.join(' '));
    return row.join(' ');
}

solve(3)