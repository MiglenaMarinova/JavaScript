function solve() {

  const generateButtonElemnt = document.querySelector('#exercise > button');
  const inputElements = document.querySelector('#exercise > textarea');
  const buyButtonElemnt = document.querySelector('#exercise > button:nth-child(6)');
  const outputTextArea = document.querySelector('#exercise > textarea:nth-child(5)');


  generateButtonElemnt.addEventListener('click', (e) => {

    const furnitureList = JSON.parse(inputElements.value);
    const tableBodyElemnt = document.querySelector('.table tbody');
    const rowElement = tableBodyElemnt.querySelector('tr');
    const checkboxElements = tableBodyElemnt.querySelector('input[type=checkbox]').disabled = false;

    for (const input of furnitureList) {

      let newRowElement = rowElement.cloneNode(false);

      let newImgElemnt = document.createElement('img');
      newImgElemnt.src = input.img;
      let newTdImg = document.createElement('td');
      newTdImg.appendChild(newImgElemnt);
      
      let newParagraphName = document.createElement('p');
      let newTdNameElement = document.createElement('td');
      newParagraphName.textContent = input.name;
      newTdNameElement.appendChild(newParagraphName);

      let newParagraphPrice = document.createElement('p');
      let newTdPriceElement = document.createElement('td');
      newParagraphPrice.textContent = input.price;
      newTdPriceElement.appendChild(newParagraphPrice);

      let newParagraphDecF = document.createElement('p');
      let newTdDecFaElement = document.createElement('td');
      newParagraphDecF.textContent = input.decFactor;
      newTdDecFaElement.appendChild(newParagraphDecF);

      let newCheckboxEl = document.createElement('input');
      newCheckboxEl.type = 'checkbox';
      let newTdCheckboxEl = document.createElement('td');
      newTdCheckboxEl.appendChild(newCheckboxEl);

      newRowElement.appendChild(newTdImg);
      newRowElement.appendChild(newTdNameElement);
      newRowElement.appendChild(newTdPriceElement);
      newRowElement.appendChild(newTdDecFaElement);
      newRowElement.appendChild(newTdCheckboxEl);
      
      tableBodyElemnt.appendChild(newRowElement);
          
    }

  });

  buyButtonElemnt.addEventListener('click', (e) => {
    const furnitureList = document.querySelectorAll('.table tbody tr');
    const boughtFurniture = [];
    let totalPrice = 0;
    let totalDecFactor = 0;
    for (const furniture of furnitureList) {
      const checkboxElement = furniture.querySelector('input[type=checkbox]');
      
      if(checkboxElement.checked){
        
        let name = furniture.querySelector('td:nth-child(2) > p').textContent;
        let price = Number(furniture.querySelector('td:nth-child(3) > p').textContent);
        let decFactor = Number(furniture.querySelector('td:nth-child(4) > p').textContent);
        boughtFurniture.push(name);
        totalPrice += price;
        totalDecFactor += decFactor;
        
      }
    }

    let avrDEcFactor = totalDecFactor / boughtFurniture.length;

    outputTextArea.value += `Bought furniture: ${boughtFurniture.join(', ')}\n`;
    outputTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    outputTextArea.value += `Average decoration factor: ${avrDEcFactor}`;
    
    console.log(boughtFurniture.join(', '));

  });
  
}
