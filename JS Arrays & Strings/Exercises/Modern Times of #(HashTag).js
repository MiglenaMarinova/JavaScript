function solve(input){
    const pattern = /#([a-zA-Z]+)/g;

    const matches = input.matchAll(pattern);
    for(const match of matches){
        console.log(match[1]);
    }
}

function solve2(input){
    const pattern = /#(?<word>[a-zA-Z]+)/g;

    const matches = input.matchAll(pattern);
    for(const match of matches){
        console.log(match.groups.word);
    }
}

solve2('Nowadays everyone uses # to tag a #special word in #socialMedia');