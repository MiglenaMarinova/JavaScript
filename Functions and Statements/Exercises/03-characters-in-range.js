function findSymbolsBetween(char1, char2){
    let first = char1.charCodeAt(0);
    let second = char2.charCodeAt(0);
    let arrSymbols = [];

    if(char1.charCodeAt(0) > char2.charCodeAt(0)){
        first=char2.charCodeAt(0);
        second=char1.charCodeAt(0);
    }

    for (let i = first + 1; i < second; i++) {
        arrSymbols.push(String.fromCharCode(i));        
    }

    return arrSymbols;
}


function solve(char1, char2){
    
    const result = findSymbolsBetween(char1, char2);

    console.log(result.join(' '));
}

solve('#',
':'
)