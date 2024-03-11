function solve(someWords, templateString){
    let templeteArray = templateString.split(' ');
    let words = someWords.split(', ');

    for(let searchedWord of templeteArray){
        if(searchedWord.startsWith('*') && searchedWord.endsWith('*')){
            for (let index = 0; index < words.length; index++) {
                if(words[index].length === searchedWord.length){
                    templeteArray.splice(templeteArray.indexOf(searchedWord), 1, words[index])
                }
            }
        }
    }
    console.log(templeteArray.join(' '));
}

function regExSolve (wordsInput, template){

    const words = wordsInput.split(', ');

    const matches = template.matchAll(/\*+/g);
    for(const match of matches){
        const word = words.find(w => w.length === match[0].length);
         template = template.replace(match[0], word);
    }

    console.log(template);

}

function fancySolve(wordsInput, template){
    const words = wordsInput.split(', ');
    const teplateWords = template.split(' ');

    const result = teplateWords
        .map(tWord => tWord[0] === '*' ? words.find(w => w.length === tWord.length) : tWord)
        .join(' ');

    console.log(result);

}

fancySolve('great, learning',
'softuni is ***** place for ******** new programming languages'

)