function solve(input){

    const regex = /\b\w{1,}\b/g;
    let result = input.match(regex);

    let array = [];

    for (let index = 0; index < result.length; index++) {
        
        let current = result[index];
        array.push(current.toUpperCase());
        
    }
    
    console.log(array.join(", ")); 

}

solve ('Hi, how are you?');