function addItem() {
    const inputItemElemnt = document.getElementById('newItemText');
    const itemsListElement = document.getElementById('items');
   
    // Create new item elemnt
    const newInputItemElement = document.createElement('li');
    newInputItemElement.textContent = inputItemElemnt.value;

    // Create link element
    const deleteLinkElement = document.createElement('a');
    deleteLinkElement.textContent = '[Delete]';
    deleteLinkElement.href = '#';

    // Add event to linkElemnt
    deleteLinkElement.addEventListener('click', () => {
       newInputItemElement.remove(); 
    })

    // Apppend link element to new item element
    newInputItemElement.appendChild(deleteLinkElement);

    // Append new item elemnt to list
    itemsListElement.appendChild(newInputItemElement);

    // Clear input
    inputItemElemnt.value = '';
}