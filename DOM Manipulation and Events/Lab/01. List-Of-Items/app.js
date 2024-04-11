function addItem() {
    const inputElement = document.getElementById('newItemText');
    const itemList = document.getElementById('items');
    
    // Create new item
    const newItemElement = document.createElement('li');

    //Add text content
    newItemElement.textContent = inputElement.value;

    //Append new element to DOM
    itemList.appendChild(newItemElement);

    //Clear input element
    inputElement.value = '';  
       
}