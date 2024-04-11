function deleteByEmail() {
    const inputEmailElement = document.querySelector('input[name=email]');
    const resultElemnt = document.getElementById('result');
    const tableRowElements = document.querySelectorAll('table#customers tbody tr');
    
    // Search for tr element
    const resultTrElement = Array
    .from(tableRowElements)
    .find(element => element.children[1].textContent.includes(inputEmailElement.value));
    
    if(resultTrElement){
        // Delete table row
        resultTrElement.remove();
        // Show deleted text
        resultElemnt.textContent = 'Deleted.';
    }else{
        resultElemnt.textContent = 'Not found.'; 
    }   
    
    // Clear input
    inputEmailElement.value = '';
}