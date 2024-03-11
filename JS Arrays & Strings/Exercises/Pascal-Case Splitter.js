// Option 1

function fancySolve(input){

    const matches = input.matchAll(/[A-Z][a-z]*/g);

    const words = Array.from(matches).map(match => match[0]);

    console.log(words.join(', '));

}

// Option 2

function solve(input){
    let startIndex = -1;
    const words = [];

    for (let i = 0; i < input.length; i++) {
        if(input[i] === input[i].toUpperCase()){
            if(startIndex < 0){
                startIndex = i;
            }else {
                let word = input.substring(startIndex, i)
                words.push(word);
                startIndex = i;
            }
        }
    }
    words.push(input.substring(startIndex));

    console.log(words.join(', '));
}

// Option 3

function pascalCaseSplitter(word){
    let sentence = word.split("");

    for (let i = 1; i < sentence.length; i++) {
        if(sentence[i].charCodeAt(0) >= 65 && sentence[i].charCodeAt(0) <= 90){
            sentence.splice(i, 0, ' ');
            i++;
        }
    }

    console.log(sentence.join('').split(' ').join(', '));
}

// Option 4

function lookAheadSolve(input){
    console.log(input.split(/(?=[A-Z])/).join(', '));
}



solve('SplitMeIfYouCanHaHaYouCantOrYouCan')