function solve(text){
    const isValid = isValidLength(text) && consistOnlyLetterAndDigits(text) && hatAtLeastTwoDigits(text);

    if(isValid){
        console.log("Password is valid");
    }

    if(!isValidLength(text)){
        console.log('Password must be between 6 and 10 characters');
    }
    
    if(!consistOnlyLetterAndDigits(text)){
        console.log('Password must consist only of letters and digits');
    }

    if(!hatAtLeastTwoDigits(text)){
        console.log('Password must have at least 2 digits');
    }
}

function isValidLength (text){
    return text.length >=6 && text.length <= 10;
}

function consistOnlyLetterAndDigits(text){
    return /^[a-zA-Z\d]+$/.test(text);
    
}

function hatAtLeastTwoDigits(text){
    return text
        .split('')
        .filter(char => Number.isInteger(Number(char)))
        .length >= 2;
}

solve('Pa$s$s')