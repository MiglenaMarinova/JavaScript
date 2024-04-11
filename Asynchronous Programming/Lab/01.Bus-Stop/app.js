function getInfo() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';
    
    const stopIdElemnt = document.getElementById('stopId');
    const stopNameElemnt = document.getElementById('stopName');
    const busesElemnts = document.getElementById('buses');

    const stopId = stopIdElemnt.value;

    fetch(`${baseUrl}/${stopId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            stopNameElemnt.textContent = data.name;

            for (const busId in data.buses) {
                const liElement = document.createElement('li');
                liElement.textContent = `Bus ${busId} arrives in ${data.buses[busId]} minutes`;
                busesElemnts.appendChild(liElement);

            }

        })
        .catch(() => {
            stopNameElemnt.textContent = 'Error';
        });

}