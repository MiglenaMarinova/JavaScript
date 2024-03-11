function solve(wordInput, textInput){
    const text = textInput.toLowerCase().split(' ');
    const isIncluded = text.includes(wordInput.toLowerCase());

    if(isIncluded){
        //console.log(wordInput);
        return wordInput;
    }

    //console.log(`${wordInput} not found!`);
    return `${wordInput} not found!`;

}

solve('javascript',
'JavaScript is the best programming language'
)