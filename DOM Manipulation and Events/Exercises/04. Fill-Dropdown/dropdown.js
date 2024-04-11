function addItem() {
    const textElement = document.getElementById('newItemText');
    const valueElement = document.getElementById('newItemValue');
    const selectElement = document.getElementById('menu');

    let newOptionElement = document.createElement('option');

    newOptionElement.textContent = textElement.value;
    newOptionElement.value = valueElement.value;

    if (textElement.value !== '' && valueElement.value !== '') {
        selectElement.appendChild(newOptionElement);
    }    

    textElement.value = '';
    valueElement.value= '';

}