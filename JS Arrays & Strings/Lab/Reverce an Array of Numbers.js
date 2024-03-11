function reverce(num, arr){
    let revercedArr = [];

    for (let i = 0; i < num; i++) {
        revercedArr.push(arr[i]);        
    }
    let result ='';
    for (let i = revercedArr.length - 1; i >= 0; i--){
        result = result.concat(revercedArr[i], ' ');      
    }

    console.log(result.trim());
}

function solve(num, arr){
    let result = arr
        .slice(0, num)
        .reverse()
        .join(' ');

     console.log(result);   
}

reverce(3, [10, 20, 30, 40, 50])
solve(3, [10, 20, 30, 40, 50])