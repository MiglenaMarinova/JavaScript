function solve(text){
    const dataObject = JSON.parse(text);
    Object.keys(dataObject)
    .forEach(propName => console.log(`${propName}: ${dataObject[propName]}`));

}

solve('{"name": "George", "age": 40, "town": "Sofia"}')