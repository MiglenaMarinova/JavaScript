function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';
    const loadButtonElemnt = document.getElementById('btnLoad');
    const phonebookULElement = document.getElementById('phonebook');
    const createButtonElement = document.getElementById('btnCreate');
    const personInputElement = document.getElementById('person');
    const phoneInputElement = document.getElementById('phone');
    
    loadButtonElemnt.addEventListener('click', () => {
        
        phonebookULElement.innerHTML = '';
        
        fetch(baseUrl)
        .then(response => response.json())
        .then(data => {
            Object.values(data)
            .forEach(contact => {
                phonebookULElement.appendChild(createLiElement(contact));
            });
        })      
        
    });
    
    createButtonElement.addEventListener('click', () => {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                person: personInputElement.value,
                phone: phoneInputElement.value,
            })
        })
        .then((response) => response.json())
        .then(contact => {
            const liElement = createLiElement(contact);
            phonebookULElement.appendChild(liElement);
            
            personInputElement.value ='';
            phoneInputElement.value ='';
        });
    });
    
    
    function createLiElement ({_id, person, phone}){
        const liElement = document.createElement('li');
        liElement.textContent = `${person}: ${phone}`;
        
        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.textContent = 'Delete';
        
        deleteButtonElement.addEventListener('click', () => {
            fetch(`${baseUrl}/${_id}`, {
                method: 'DELETE'
            })
            .then(() => {
                liElement.remove();
            });
            
        });
        
        liElement.appendChild(deleteButtonElement);
        
        return liElement;
    }
    
    
}

attachEvents();