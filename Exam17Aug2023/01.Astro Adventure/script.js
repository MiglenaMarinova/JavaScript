function solve(input){

    const count = input.shift();
    
    const austronauts = {};

    for (let index = 0; index < count; index++) {
        const [name, oxygen, energy] = input.shift().split(' ');

        austronauts[name] = {oxygen, energy};
        
    }

    let currentLine = input.shift();

    while(currentLine != 'End'){

        const [command, austroName, value] = currentLine.split(' - ');

        let austronaut = austronauts[austroName];
        
        switch (command) {
            case 'Explore':
                let energyNeeded = value;
                if(Number(austronaut.energy) >= Number(energyNeeded)){
                    let newEnergyLevel = Number(austronaut.energy) - Number(energyNeeded);
                    austronaut.energy = newEnergyLevel;
                    console.log(`${austroName} has successfully explored a new area and now has ${newEnergyLevel} energy!`);
                }else{
                    console.log(`${austroName} does not have enough energy to explore!`);
                }                
                break;
            case 'Refuel':
                let energyToRefuel = value;
                let newEnergyLevel = Number(austronaut.energy) + Number(energyToRefuel);
                if(newEnergyLevel > 200){
                    newEnergyLevel = 200;
                }
                console.log(`${austroName} refueled their energy by ${Number(newEnergyLevel - Number(austronaut.energy))}!`);
                austronaut.energy = newEnergyLevel;
                break;
            case 'Breathe':
                let givenOxygenToRecover = value;
                let newOxygenAmount = Number(austronaut.oxygen) + Number(givenOxygenToRecover);
                if(newOxygenAmount > 100){
                    newOxygenAmount = 100;
                }
                console.log(`${austroName} took a breath and recovered ${Number(newOxygenAmount - Number(austronaut.oxygen))} oxygen!`);
                austronaut.oxygen = newOxygenAmount;
                break;
        }

        currentLine = input.shift(); 
    }

    for (const austroName in austronauts) {
        console.log(`Astronaut: ${austroName}, Oxygen: ${austronauts[austroName].oxygen}, Energy: ${austronauts[austroName].energy}`);
    }

}

solve([    '4',
'Alice 60 100',
'Bob 40 80',
'Charlie 70 150',
'Dave 80 180',
'Explore - Bob - 60',
'Refuel - Alice - 30',
'Breathe - Charlie - 50',
'Refuel - Dave - 40',
'Explore - Bob - 40',
'Breathe - Charlie - 30',
'Explore - Alice - 40',
'End']

)