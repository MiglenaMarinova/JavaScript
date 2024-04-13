function solve(input){

    const count = input.shift();
    let ridersList = {};
    let updatedRiderList = {};

    for (let index = 1; index <= count; index++) {
        const[name, fuelCapacity, position] = input.shift().split('|');
        ridersList[name] = {fuelCapacity, position};
        
    }

    let currentLine = input.shift();

    while(currentLine !== 'Finish'){

        const[command, riderName, firstArg, secondArg] = currentLine.split(' - ');

        const rider = ridersList[riderName];

        switch (command) {
            case 'StopForFuel':
                let minNeededFuel = firstArg;
                let changedPosition = secondArg;
                if(Number(rider.fuelCapacity) < Number(minNeededFuel)){
                    console.log(`${riderName} stopped to refuel but lost his position, now he is ${changedPosition}.`);
                    rider.position = changedPosition;
                }else{                    
                    console.log(`${riderName} does not need to stop for fuel!`);
                }                
                break;
            case 'Overtaking':
                let secondRider = ridersList[firstArg];
                let rider1position = rider.position;
                let rider2position = secondRider.position;
                if(Number(rider.position) < Number(secondRider.position)){
                    rider.position = rider2position;
                    secondRider.position = rider1position;
                    console.log(`${riderName} overtook ${firstArg}!`);
                    
                }                
                break;
            case 'EngineFail':
                let lapsLeft = firstArg;
                //const updatedArray = Object.fromEntries(
                //Object.entries(arr).filter(([key]) => key !== 'name'));

                const arr = Object.entries(ridersList)
                    .filter(([name, value]) => name !== riderName);
                updatedRiderList = Object.fromEntries(arr);
                
                ridersList = updatedRiderList;
                
                console.log(`${riderName} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);                
                break;        
            
        }

        currentLine = input.shift();        
    }

    for (const name in ridersList) {
        console.log(`${name}`);
        console.log(`  Final position: ${ridersList[name].position}`);
    }
}

solve(["3",
"Valentino Rossi|100|1",
"Marc Marquez|90|2",
"Jorge Lorenzo|80|3",
"StopForFuel - Valentino Rossi - 50 - 1",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"])




