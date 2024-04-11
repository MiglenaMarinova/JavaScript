window.addEventListener("load", solve);

function solve(){

    const addButtonElemnt = document.getElementById('add-btn');
    const expenseInputElement = document.getElementById('expense');
    const amountInputElement = document.getElementById('amount');
    const dateInputElement = document.getElementById('date');
    const deleteButtonElement = document.querySelector('button.btn.delete');
    
    
    addButtonElemnt.addEventListener('click', (e) => {
        const ulPreviewElement = document.getElementById('preview-list');

        const expenses = expenseInputElement.value;
        const amount = amountInputElement.value;
        const date = dateInputElement.value;

        let isValidInput = expenseInputElement.value !=='' && amountInputElement.value !=='' && dateInputElement.value !=='';
        
        if(!isValidInput){
            return;            
        }
        
        const editButton = document.createElement('button');
        editButton.classList.add('btn');
        editButton.classList.add('edit');
        editButton.textContent = 'edit';
        
        const okButton = document.createElement('button');
        okButton.classList.add('btn');
        okButton.classList.add('ok');
        okButton.textContent = 'ok';
        
        const divButtonsElemnt = document.createElement('div');
        divButtonsElemnt.classList.add('buttons');
        divButtonsElemnt.appendChild(editButton);
        divButtonsElemnt.appendChild(okButton);
        
        
        const previewExpensePElement = document.createElement('p');
        previewExpensePElement.textContent =`Type: ${expenses}`; 
        
        const previewAmountPElement = document.createElement('p');
        previewAmountPElement.textContent = `Amount: ${amount}$`;
        
        const previewDatePElement = document.createElement('p');
        previewDatePElement.textContent = `Date: ${date}`;
        
        const atricleElement  = document.createElement('article');
        atricleElement.appendChild(previewExpensePElement);
        atricleElement.appendChild(previewAmountPElement);
        atricleElement.appendChild(previewDatePElement);
        
        const liItemElement = document.createElement('li');
        liItemElement.classList.add('expense-item');
        liItemElement.appendChild(atricleElement);
        liItemElement.appendChild(divButtonsElemnt);
        
        ulPreviewElement.appendChild(liItemElement);
        
        
        editButton.addEventListener('click', () => {
                       
            expenseInputElement.value=expenses;
            amountInputElement.value=amount;
            dateInputElement.value=date;
            
            liItemElement.remove();

            addButtonElemnt.removeAttribute('disabled');
        });

        okButton.addEventListener('click', () => {
            const ulExpenseElement = document.getElementById('expenses-list');

            const expensePElement = document.createElement('p');
            expensePElement.textContent = previewExpensePElement.textContent;
            
            const amountPElement = document.createElement('p');
            amountPElement.textContent =previewAmountPElement.textContent; 
            
            const datePElement = document.createElement('p');
            datePElement.textContent =previewDatePElement.textContent; 

            const atricleElement  = document.createElement('article');
            atricleElement.appendChild(expensePElement);
            atricleElement.appendChild(amountPElement);
            atricleElement.appendChild(datePElement);
            
            const liItemElement = document.createElement('li');
            liItemElement.classList.add('expense-item');
            liItemElement.appendChild(atricleElement);

            ulExpenseElement.appendChild(liItemElement);

            const LiItemToRemove = document.querySelector('#preview-list > li');
            LiItemToRemove.remove();
            addButtonElemnt.removeAttribute('disabled');
        });
        
        expenseInputElement.value = '';
        amountInputElement.value='';
        dateInputElement.value='';
        
        
        addButtonElemnt.setAttribute('disabled', 'disabled');
    });
    
    deleteButtonElement.addEventListener('click', () => {
        const ulExpenseElement = document.getElementById('expenses-list');
        ulExpenseElement.innerHTML = '';
    });
    
    
    
}