function solve(input){
    const words = input.toLowerCase().split(' ');
    const oddOccurances = {};

    for (const word of words) {
        oddOccurances[word] = 0;

        for (let i = 0; i < words.length; i++) {
            
            if(word === words[i]){
                oddOccurances[word] += 1;
            }            
        }        
    }

    let result = Object.entries(oddOccurances)
        .filter(([word, occurrens]) => occurrens % 2 !==0)
        .map(([word, occurrens]) => word)
        .join(' ');
     
     console.log(result);   
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')