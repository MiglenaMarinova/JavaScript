function solve(text, searchedWord){
    let words = text.split(' ');
    let count = 0;

    for(let word of words){
        if(word === searchedWord){
            count ++;
        }
    }
    console.log(count);

}

function solve2(text, searchedWord){
    let result = text
        .split(' ')
        .filter(element => element === searchedWord)
        .length;

    console.log(result);
}

solve('softuni is great place for learning new programming languages',
'softuni'

)