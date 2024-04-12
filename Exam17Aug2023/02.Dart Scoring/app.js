window.addEventListener("load", solve);

function solve() {

  const addButtonElement = document.getElementById('add-btn');
  const playerInputElement = document.getElementById('player');
  const scoreInputElement = document.getElementById('score');
  const roundInputElement = document.getElementById('round');
  const ulSureList = document.getElementById('sure-list');
  const ulScoreBoardList = document.getElementById('scoreboard-list');
  const clearButtonElement = document.querySelector('.btn.clear');


  addButtonElement.addEventListener('click', () => {

    let istValidInput = 
      playerInputElement.value != '' &&
      scoreInputElement.value != '' &&
      roundInputElement.value != '' ;

    if(!istValidInput){
      return;
    }
    let name = playerInputElement.value;
    let score = scoreInputElement.value;
    let round = roundInputElement.value;

    ulSureList.appendChild(createDartElement(name, score, round));    

    playerInputElement.value = '' ;
    scoreInputElement.value = '' ;
    roundInputElement.value = '' ;

    addButtonElement.setAttribute('disabled', 'disabled');

  });
    
  function createDartElement(name, score, round){

    const editButton = document.createElement('button');
    editButton.textContent = 'edit';
    editButton.classList.add('btn');
    editButton.classList.add('edit');

    const okButton = document.createElement('button');
    okButton.textContent = 'ok';
    okButton.classList.add('btn');
    okButton.classList.add('ok');

    const namePiEl = document.createElement('p');
    namePiEl.textContent = name;
    const scorePiEl = document.createElement('p');
    scorePiEl.textContent = `Score: ${score}`;
    const roundPiEl = document.createElement('p');
    roundPiEl.textContent = `Round: ${round}`;

    const articleEl = document.createElement('article');
    articleEl.appendChild(namePiEl);
    articleEl.appendChild(scorePiEl);
    articleEl.appendChild(roundPiEl);
    

    const liElement = document.createElement('li');
    liElement.classList.add('dart-item');
    liElement.appendChild(articleEl);
    liElement.appendChild(editButton);
    liElement.appendChild(okButton);

    editButton.addEventListener('click', () => {
      playerInputElement.value = name ;
      scoreInputElement.value = score ;
      roundInputElement.value = round ;

      liElement.remove();

      addButtonElement.removeAttribute('disabled');
    });

    okButton.addEventListener('click', () => {
      let editBtnToRemove = liElement.querySelector('.btn.edit');
      let okBtnToRemove = liElement.querySelector('.btn.ok');
      editBtnToRemove.remove();
      okBtnToRemove.remove();

      ulScoreBoardList.appendChild(liElement);

      addButtonElement.removeAttribute('disabled');
    });

    return liElement;
  }

  clearButtonElement.addEventListener('click', () => {
    ulScoreBoardList.innerHTML = '';
  });


  }
  