// Function declaration
function log(text){
    console.log(text);
}

// Function expression
const log2 = function(text){
    console.log(text);
}

// Arrow function
const log3 = (text) => console.log(text);


//  Function invokation
log('Some text');
log2('Some text 2');
log3('Some text 3');

//const logCopy = log2();
//logCopy(); 


// Default return value
const defaultReturnValue = log('Default value');
console.log(defaultReturnValue); // връща по default undefind

// Invoke function from another function
function masterLog(text){
    log(`1 - ${text}`);
    log2(`2 - ${text}`);
    log3(`3 - ${text}`);
}

masterLog('Ivo');

// Recursion
function countDown(x){
    console.log(x);
    if (x > 0) {
        countDown(x - 1);
    }
}

countDown(5);

// Return value
function isValid(index, arr){
    if(Number.isInteger(index) && index >= 0 && index < arr.length){
        return true;
    } else {
        return false;
    }
}

function isValid(index, arr){
    return Number.isInteger(index) && index >= 0 && index < arr.length
    
}







