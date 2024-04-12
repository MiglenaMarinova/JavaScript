const baseUrl = 'http://localhost:3030/jsonstore/tasks';
const loadHistoryButtonElement = document.getElementById('load-history');
const divListElement = document.getElementById('list');
const addWeatherButtonElement = document.getElementById('add-weather');
const editWeatherButtonElement = document.getElementById('edit-weather');
const locationInputElement = document.getElementById('location');
const temperatureInputElement = document.getElementById('temperature');
const dateInputElement = document.getElementById('date');
const divFormElement = document.getElementById('form');

loadHistoryButtonElement.addEventListener('click', loadHistory);

addWeatherButtonElement.addEventListener('click', async() => {

    const newWeather = getInputData();

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'applivcation/json',
        },
        body: JSON.stringify(newWeather)
    });

    if(!response.ok){
        return;
    }
    clearInputsField();

    await loadHistory();    

});

editWeatherButtonElement.addEventListener('click', editExistingWeader);

async function loadHistory(){
    
    divListElement.innerHTML = '';

    const response = await fetch(baseUrl);
    const responseResult = await response.json();

    

    for (const weatherInfo of Object.values(responseResult)) {
        let location = weatherInfo.location;
        let temperature = weatherInfo.temperature;
        let date = weatherInfo.date;
        let id = weatherInfo._id;        

        divListElement.appendChild(creatWeatherItem(location, temperature, date, id));
    }    
}

function getInputData(){
    let location = locationInputElement.value ;
    let temperature = temperatureInputElement.value ;
    let date = dateInputElement.value ;

    return {location, temperature, date};
}

function clearInputsField(){
    locationInputElement.value = '';
    temperatureInputElement.value = '';
    dateInputElement.value = '';
}

function creatWeatherItem(location, temperature, date, id){

    const buttonChange = document.createElement('button');
    buttonChange.classList.add('change-btn');
    buttonChange.textContent = 'Change';

    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('delete-btn');
    buttonDelete.textContent = 'Delete';

    const divButtons = document.createElement('div');
    divButtons.classList.add('buttons-container');
    divButtons.appendChild(buttonChange);
    divButtons.appendChild(buttonDelete);

    const nameH2 = document.createElement('h2');
    nameH2.textContent = location;

    const dateH3 = document.createElement('h3');
    dateH3.textContent = date;

    const temperatureH3 = document.createElement('h3');
    temperatureH3.textContent = temperature;
    temperatureH3.id = 'celsius';

    const divContainer = document.createElement('div');
    divContainer.classList.add('container');
    divContainer.appendChild(nameH2);
    divContainer.appendChild(dateH3);
    divContainer.appendChild(temperatureH3);
    divContainer.appendChild(divButtons);

    buttonChange.addEventListener('click', (e) => changeWeather(e, location, temperature, date, id));
    buttonDelete.addEventListener('click', (e) => deleteWeather(e, id));

    return divContainer;
}

function changeWeather(e, location, temperature, date, id){
    const weatherElemnt = e.currentTarget.parentElement.parentElement;
    weatherElemnt.remove();

    locationInputElement.value = location;
    temperatureInputElement.value = temperature;
    dateInputElement.value = date;

    divFormElement.setAttribute('data-id', id);

    editWeatherButtonElement.removeAttribute('disabled');

    addWeatherButtonElement.setAttribute('disabled', 'disabled');

}

function editExistingWeader(){
    const existingWeader = getInputData();

    console.log(existingWeader);
    const weatherId = divFormElement.getAttribute('data-id');

    fetch(`${baseUrl}/${weatherId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({...existingWeader, _id: weatherId})
    })
    .then(response => {
        if(!response.ok){
            return;
        }

        clearInputsField();

        loadHistory();

        editWeatherButtonElement.setAttribute('disabled', 'disabled');

        addWeatherButtonElement.removeAttribute('disabled');        

        
    })

    divFormElement.removeAttribute('data-id');
}

function deleteWeather(e, id){
    const wetherToDelete = e.currentTarget.parentElement.parentElement;

    fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
    })
    .then(response => {
        if(!response.ok){
            return;
        }

        wetherToDelete.remove();
    })

    loadHistory();
}