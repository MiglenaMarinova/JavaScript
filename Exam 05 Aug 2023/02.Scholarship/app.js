window.addEventListener("load", solve);

function solve() {
    const nextButtonElement = document.getElementById('next-btn');
    const nameInputElement = document.getElementById('student');
    const universityInputElement = document.getElementById('university');
    const scoreInputElement = document.getElementById('score');
    const ulPreviweListElement = document.getElementById('preview-list');

    nextButtonElement.addEventListener('click', () => {

      const isValidInput = 
        nameInputElement.value != '' && 
        universityInputElement.value != '' && 
        scoreInputElement.value != '' ;

      if(!isValidInput){
        return;
      }

      let name = nameInputElement.value;
      let uni = universityInputElement.value;
      let score = scoreInputElement.value;
      
      ulPreviweListElement.appendChild(createPreview(name, uni, score));

      nextButtonElement.setAttribute('disabled', 'disabled');

      clearInputFields();

    });

    function createPreview(name, uni, score){

      const editButton = document.createElement('button');
      editButton.classList.add('action-btn');
      editButton.classList.add('edit');
      editButton.textContent = 'edit';

      const applyButton = document.createElement('button');
      applyButton.classList.add('action-btn');
      applyButton.classList.add('apply');
      applyButton.textContent = 'apply';

      const h4Name = document.createElement('h4');
      h4Name.textContent = name;
      const uniPiEl = document.createElement('p');
      uniPiEl.textContent = `University: ${uni}`;
      const scorePiEl = document.createElement('p');
      scorePiEl.textContent = `Score: ${score}`;

      const articleEl = document.createElement('article');
      articleEl.appendChild(h4Name);
      articleEl.appendChild(uniPiEl);
      articleEl.appendChild(scorePiEl);

      const liElement = document.createElement('li');
      liElement.classList.add('application');
      liElement.appendChild(articleEl);
      liElement.appendChild(editButton);
      liElement.appendChild(applyButton);

      editButton.addEventListener('click', () => {
        nameInputElement.value = name ;
        universityInputElement.value = uni ;
        scoreInputElement.value = score ;

        liElement.remove();

        nextButtonElement.removeAttribute('disabled');
      });

      applyButton.addEventListener('click', () => {
        const ulCandidatesList = document.getElementById('candidates-list');
        editButton.remove();
        applyButton.remove();
        ulCandidatesList.appendChild(liElement);
        nextButtonElement.removeAttribute('disabled');
      });

      return liElement;
    }

    

    function clearInputFields(){
      nameInputElement.value = '' ;
      universityInputElement.value = '' ;
      scoreInputElement.value = '' ;
    }







  
  }
  