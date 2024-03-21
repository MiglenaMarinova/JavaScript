function solve(input){
    let parkingLot = [];

    for (let i = 0; i < input.length; i++) {
        let direction = input[i].split(', ')[0];
        let car = input[i].split(', ')[1];

        
        if(direction === 'IN' && !parkingLot.includes(car)){
            parkingLot.push(car);
        }
        if(direction ==='OUT' && parkingLot.includes(car)){
            let carOutIndex = parkingLot.indexOf(car);
            let toRemove = carOutIndex > 0 ? parkingLot.splice(carOutIndex, 1) : parkingLot.shift();

            if(parkingLot.length === 0){
                console.log('Parking Lot is Empty');
            }
        }
        
    }

    parkingLot.sort((a, b) => a.localeCompare(b))
        .forEach((car) => console.log(car));

}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']


)



