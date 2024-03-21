function solve(firstName, lastName, hairColor){

    const inputObject = {
        name: firstName,
        lastName,
        hairColor,
    }

    const jsonData = JSON.stringify(inputObject);
    console.log(jsonData);

}
 solve('George', 'Jones', 'Brown')