function solve(input){
    const words = input.shift().split(' ');

    const searchedWords = {};
    
    for (const word of words) {
        const name = word;
        searchedWords[name] = 0;

        for (let i = 0; i < input.length; i++) {
            if(input[i] === name){
                searchedWords[name]  ++;
            }
            
        }
    }

    Object.entries(searchedWords).sort((a, b) => b[1] -a [1])
          .forEach(([name, count]) => console.log(`${name} - ${count}`));

}

solve([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
  
    )