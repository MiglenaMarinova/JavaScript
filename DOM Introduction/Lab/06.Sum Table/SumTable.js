function sumTable() {
    let table = document.querySelectorAll('table tr');
    let total = 0;

    for (let i = 1; i < table.length; i++) {
        let cols = table[i].children;
        let cost = cols = cols[cols.length - 1].textContent;
        total += Number(cost);
    }

    document.getElementById('sum').textContent = total;


    //const tdCostElements = document.querySelectorAll('tr td:last-of-type:not(#sum)');
    //const tdSumElement = document.getElementById('sum');

    //tdSumElement.textContent = Array
    //    .from(tdCostElements)
    //    .reduce((sum, element)=> sum + Number(element.textContent), 0);

}

