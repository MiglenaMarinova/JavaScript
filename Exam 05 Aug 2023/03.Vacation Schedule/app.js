const baseUrl = 'http://localhost:3030/jsonstore/tasks';
const loadButtonElement = document.getElementById('load-vacations');
const divListElemnt = document.getElementById('list');
const addButtonElement = document.getElementById('add-vacation');
const editButtonElement = document.getElementById('edit-vacation');
const nameInputElement = document.getElementById('name');
const daysInputElement = document.getElementById('num-days');
const dateInputElement = document.getElementById('from-date');
const formElement = document.getElementById('form');



const loadVacation = async () => {

    const response = await fetch(baseUrl);
    const vacations = await response.json();

    divListElemnt.innerHTML = '';

    for (const vacation of Object.values(vacations)) {
        divListElemnt.appendChild(createVacation(vacation));
    }   

}

loadButtonElement.addEventListener('click', loadVacation);

addButtonElement.addEventListener('click', async() => {

    const vacation = getInputData();

    const response = fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(vacation)
    });

    if(!response.ok){
        return;
    }

    clearUnputFields();

    loadVacation();    

});

editButtonElement.addEventListener('click', async() =>{

    const {name, days, date} = getInputData();
    let vacationId = formElement.getAttribute('data-id');

    const response = await fetch(`${baseUrl}/${vacationId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name,
            days,
            date,
            _id: vacationId
        })
    });

    if(!response.ok){
        return;
    }

    formElement.removeAttribute('data-id');

    await loadVacation();

    editButtonElement.setAttribute('disabled', 'disabled');
    addButtonElement.removeAttribute('disabled');

});


function createVacation(vacation){

    const changeButton = document.createElement('button');
    changeButton.classList.add('change-btn');
    changeButton.textContent ='Change';

    const doneButton = document.createElement('button');
    doneButton.classList.add('done-btn');
    doneButton.textContent= 'Done';

    const h2name = document.createElement('h2');
    h2name.textContent = vacation.name;

    const h3date = document.createElement('h3');
    h3date.textContent = vacation.date;

    const h3daysCount = document.createElement('h3');
    h3daysCount.textContent = vacation.days;

    const divContainer = document.createElement('div');
    divContainer.classList.add('container');

    divContainer.appendChild(h2name);
    divContainer.appendChild(h3date);
    divContainer.appendChild(h3daysCount);
    divContainer.appendChild(changeButton);
    divContainer.appendChild(doneButton);

    changeButton.addEventListener('click', () => {
        nameInputElement.value = vacation.name;  
        daysInputElement.value = vacation.days;  
        dateInputElement.value = vacation.date; 

        formElement.setAttribute('data-id', vacation._id);

        divContainer.remove();

        editButtonElement.removeAttribute('disabled');
        addButtonElement.setAttribute('disabled', 'disabled');
        
    });

    doneButton.addEventListener('click', () =>{
        fetch(`${baseUrl}/${vacation._id}`, {
            method: 'DELETE'
        })
        divContainer.remove();
        loadVacation();

    })

    return divContainer;
}

function getInputData(){
    let name = nameInputElement.value;  
    let days = daysInputElement.value;  
    let date = dateInputElement.value; 
    
    return {name, days, date};
}

function clearUnputFields(){
    nameInputElement.value = '';  
    daysInputElement.value = '';  
    dateInputElement.value = ''; 
}