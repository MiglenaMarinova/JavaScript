function solve (input){

    const baristaCount = Number(input.shift());
    
    let baristasList = {};

    for (let index = 0; index < baristaCount; index++) { 

        let inputLine = input.shift();

        const[name, shift, drinks] = inputLine.split(' ');        
        
        baristasList[name] = {
            shift,
            drinksType: drinks.split(','), 
        }        
    }

    let currentLine = input.shift();
    
    while(currentLine != 'Closed'){
        const[command, baristaName, argOne, argTwo] = currentLine.split(' / ');

        let barista = baristasList[baristaName];
        
        let shift;
        let coffeeType;

        switch (command) {
            case 'Prepare':
                shift = argOne;
                coffeeType = argTwo;
                if(shift == barista.shift && barista.drinksType.includes(coffeeType)){
                    console.log(`${baristaName} has prepared a ${coffeeType} for you!`);
                }else{
                    console.log(`${baristaName} is not available to prepare a ${coffeeType}.`);
                }
                break;
            case 'Change Shift':
                shift = argOne;
                console.log(`${baristaName} has updated his shift to: ${shift}`);
                barista.shift = shift;
                break;
            case 'Learn':
                coffeeType = argOne;
                if(barista.drinksType.includes(coffeeType)){
                    console.log(`${baristaName} knows how to make ${coffeeType}.`);
                }else{
                    barista.drinksType.push(coffeeType);
                    console.log(`${baristaName} has learned a new coffee type: ${coffeeType}.`);
                }
                break;
        }

        currentLine=input.shift();
    }

    for (const barista in baristasList) {
        console.log(`Barista: ${barista}, Shift: ${baristasList[barista].shift}, Drinks: ${baristasList[barista].drinksType.join(', ')}`);
    }

};

solve([
'3',
  'Alice day Espresso,Cappuccino',
  'Bob night Latte,Mocha',
  'Carol day Americano,Mocha',
  'Prepare / Alice / day / Espresso',
  'Change Shift / Bob / night',
  'Learn / Carol / Latte',
  'Learn / Bob / Latte',
  'Prepare / Bob / night / Latte',
  'Closed']
)