function solve() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/schedule';
    const infoBoxElement = document.querySelector('.info');
    const departButtonElemnt = document.getElementById('depart');
    const arriveButtonElemnt = document.getElementById('arrive');

    let stopId = 'depot';  
    let currentStopName = '';  
    
    function depart() {
        
        fetch(`${baseUrl}/${stopId}`)
            .then(response => response.json())
            .then(data => {
                
                stopId = data.next;
                currentStopName = data.name;
                infoBoxElement.textContent= `Next stop ${currentStopName}`;
                departButtonElemnt.setAttribute('disabled', 'disabled');
                arriveButtonElemnt.disabled = false;               
            })
            .catch(() => {
                infoBoxElement.textContent = 'Error';
                departButtonElemnt.setAttribute('disabled', 'disabled');
                arriveButtonElemnt.setAttribute('disabled', 'disabled');
                
            });
    }

    async function arrive() {
        
        infoBoxElement.textContent = `Arriving at ${currentStopName}`;
        arriveButtonElemnt.setAttribute('disabled', 'disabled');
        departButtonElemnt.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();