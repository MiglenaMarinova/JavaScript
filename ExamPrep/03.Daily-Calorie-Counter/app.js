function solve(){
    const baseUrl = 'http://localhost:3030/jsonstore/tasks';
    
    const loadMealButtonElement = document.getElementById('load-meals');
    const mealsListElement = document.getElementById('list');
    const addButtonElement = document.getElementById('add-meal');
    const editButtonElement = document.getElementById('edit-meal');
    const foodInputElement = document.getElementById("food");
    const timeInputElement = document.getElementById("time");
    const calorisInputElement = document.getElementById("calories");
    const formElement = document.querySelector('#form');


    
    const loadMeals = async () => {
        const response = await fetch(baseUrl);
        const responseResult = await response.json();
        
        mealsListElement.innerHTML = '';
        
        for (const meal of Object.values(responseResult)) {
            mealsListElement.appendChild(createMeal(meal));
            
            let food = meal.food;
            let time = meal.time;
            let calories = meal.calories;
            
            //const changeButtonElement = document.createElement('button');
            //changeButtonElement.classList.add('change-meal');
            //changeButtonElement.textContent = 'Change';
            //const deleteButtonElement = document.createElement('button');
            //deleteButtonElement.classList.add('delete-meal');
            //deleteButtonElement.textContent = 'Delete';
            //
            //const divButtonELement = document.createElement('div');
            //divButtonELement.id = 'meal-buttons';
            //divButtonELement.appendChild(changeButtonElement);
            //divButtonELement.appendChild(deleteButtonElement);
            //
            //const h2Element = document.createElement('h2');
            //h2Element.textContent = meal.food;
            //const firstH3Element = document.createElement('h3');
            //firstH3Element.textContent = meal.time;
            //const secondtH3Element = document.createElement('h3');
            //secondtH3Element.textContent = meal.calories;
            
            //const divMealElement = document.createElement('div');
            //divMealElement.classList.add('meal');
            //divMealElement.appendChild(h2Element);
            //divMealElement.appendChild(firstH3Element);
            //divMealElement.appendChild(secondtH3Element);
            //divMealElement.appendChild(divButtonELement);
            
            //mealsListElement.appendChild(divMealElement);
            
            
            
        }
        
        
    };

    loadMealButtonElement.addEventListener('click', loadMeals);

    addButtonElement.addEventListener('click', async () => {
        //get input data
        const newMeal = getInputData();

        //create post request 
        const response = await fetch(baseUrl, {
            method: 'POST',
            header:{
                'content-type' : 'application/json',
            },
            body: JSON.stringify(newMeal),
        });

        if(!response.ok){
            return;
        }

        //clear input fields
        clearInputData();

        //load all meals
        await loadMeals();

    });

    editButtonElement.addEventListener('click', async() => {
        //get data from inputs
        const {food, time, calories} = getInputData();

        //get meal id
        let mealId = formElement.getAttribute('data-id');
        
        //make a put request
        const response = await fetch(`${baseUrl}/${mealId}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json',
            },
            body: JSON.stringify({
                food,
                calories,
                time,
                _id: mealId,
            })
        });

        if(!response.ok){
            return;
        }

        //deactivate edit button
        editButtonElement.setAttribute('disabled', 'disabled'),

        //activate add button
        addButtonElement.removeAttribute('disabled');

        //clear curent meal id
        formElement.removeAttribute('data-id');

        //clear input fields
        clearInputData();

        //load meal
        await loadMeals();
    })

    function getInputData(){
        const food = foodInputElement.value; 
        const time = timeInputElement.value; 
        const calories = calorisInputElement.value; 

        return {food, time, calories}
    }

    function clearInputData(){
        foodInputElement.value = '';
        timeInputElement.value = '';
        calorisInputElement.value = '';
    }  
    
    function createMeal(meal){
        const changeButtonElement = document.createElement('button');
        changeButtonElement.classList.add('change-meal');
        changeButtonElement.textContent = 'Change';

        const deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('delete-meal');
        deleteButtonElement.textContent = 'Delete';
        
        const divButtonELement = document.createElement('div');
        divButtonELement.id = 'meal-buttons';
        divButtonELement.appendChild(changeButtonElement);
        divButtonELement.appendChild(deleteButtonElement);

        const h2Element = document.createElement('h2');
        h2Element.textContent = meal.food;
        const firstH3Element = document.createElement('h3');
        firstH3Element.textContent = meal.time;
        const secondtH3Element = document.createElement('h3');
        secondtH3Element.textContent = meal.calories;

        const divMealElement = document.createElement('div');
        divMealElement.classList.add('meal');
        divMealElement.appendChild(h2Element);
        divMealElement.appendChild(firstH3Element);
        divMealElement.appendChild(secondtH3Element);
        divMealElement.appendChild(divButtonELement);

        changeButtonElement.addEventListener('click', () => {
            // sava current meal id
            formElement.setAttribute('data-id', meal._id);

            //populate input
            foodInputElement.value = meal.food;
            timeInputElement.value = meal.time;
            calorisInputElement.value = meal.calories;

            //activate edit button
            editButtonElement.removeAttribute('disabled');

            //deactivate add button
            addButtonElement.setAttribute('disabled', 'disabled');

            //remove from list
            divMealElement.remove();
        });

        deleteButtonElement.addEventListener('click', async () => {
            await fetch(`${baseUrl}/${meal._id}`, {
                method: 'DELETE'
            });
            divMealElement.remove();
        });

        return divMealElement;
        
    }
    
}
solve();



