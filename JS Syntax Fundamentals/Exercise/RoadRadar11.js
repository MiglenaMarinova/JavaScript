function solve(speed, area){
    let speedLimit=0;
    let speedDefference=0;
    
    switch (area) {
        case 'motorway':
            speedLimit = 130;
            speedDefference = speed-speedLimit;
            break;
        case 'interstate':
            speedLimit = 90;
            speedDefference = speed-speedLimit;
            break;
        case 'city':
            speedLimit = 50;
            speedDefference = speed-speedLimit;
            break;
        case 'residential':
            speedLimit = 20;
            speedDefference = speed-speedLimit;
            break;
    }

    let status = '';

    if (speedDefference <= 0) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        return;
    }else if(speedDefference <= 20){
        status = 'speeding';
    }else if(speedDefference <= 40){
        status = 'excessive speeding';
    }else {
        status='reckless driving';
    }

    console.log(`The speed is ${speedDefference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);

}

solve(200, 'motorway');