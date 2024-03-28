function generateReport() {
    const checkboxesElements = Array.from(document.querySelectorAll('table thead tr th'));
    let arrayCheckedIndex = [];
    let arrayPropNames = [];
    
    for (const column of checkboxesElements){
        let checkboxElement = column.querySelector('input[type=checkbox]');
        
        if(checkboxElement.checked){
            
            let elementIndex = checkboxesElements.indexOf(column);
            arrayCheckedIndex.push(elementIndex);
            let propName = column.querySelector('input').name;
            arrayPropNames.push(propName);
        }
    }
    
    const dataRowElements = Array.from(document.querySelectorAll('table tbody tr'));
    let arrayResult = [];
    let objResult = {};
    
    for (const tBodyRow of dataRowElements) {
        let columnsDataElements = tBodyRow.querySelectorAll('td');
        
        for (let i = 0; i < arrayCheckedIndex.length; i++) {
            let key = arrayPropNames[i];
            let value = columnsDataElements[arrayCheckedIndex[i]].textContent;
            objResult[key] = value;
        }
        
        arrayResult.push(Object.assign(objResult));
        objResult = {};
    }    
    
    //console.log(arrayResult);
    document.getElementById('output').value = JSON.stringify(arrayResult);
    
}