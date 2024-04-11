function create(words) {
   
   let divContainerElement = document.getElementById('content');

   for (const word of words) {
      
      let newDivElement = document.createElement('div');
      let newParagraphElement = document.createElement('p');
      newParagraphElement.style.display = 'none';

      newParagraphElement.textContent = word;
      newDivElement.appendChild(newParagraphElement);
      divContainerElement.appendChild(newDivElement);

      newDivElement.addEventListener('click', (e) => {
         newParagraphElement.style.display = '';
      });
      
   }
}