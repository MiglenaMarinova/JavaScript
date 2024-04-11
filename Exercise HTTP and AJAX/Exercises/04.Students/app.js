function attachEvents() {
  const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

  const tableBodyElement = document.querySelector('#results tbody');
  const firstNameInputElement = document.querySelector('input[name=firstName]');
  const lastNameInputElement = document.querySelector('input[name=lastName]');
  const facultyNumberInputElement = document.querySelector('input[name=facultyNumber]');
  const gradeInputElement = document.querySelector('input[name=grade]');

  const submitButtonElement = document.getElementById('submit');

  submitButtonElement.addEventListener('click', () => {
      const newStudent = {
        firstName: firstNameInputElement.value,
        lastName: lastNameInputElement.value,
        facultyNumber: facultyNumberInputElement.value,
        grade: gradeInputElement.value,
      }

      fetch(baseUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application-json',
        },
        body: JSON.stringify(newStudent),
      })
      .then(response => response.json())
      .then(data => {
          tableBodyElement.appendChild(createTrElemnt(data));

          firstNameInputElement.value = '';
          lastNameInputElement.value = '';
          facultyNumberInputElement.value = '';
          gradeInputElement.value = '';
      })

  });

  fetch(baseUrl)
    .then(response => response.json())
    .then(data => Object.values(data)
    .forEach(student => tableBodyElement.appendChild(createTrElemnt(student))));

  function createTrElemnt(student){
    const trElement = document.createElement('tr');

    const createTd = value => {
      const tdElement = document.createElement('td');
      tdElement.textContent = value;

      return tdElement;
    }

    trElement.appendChild(createTd(student.firstName));
    trElement.appendChild(createTd(student.lastName));
    trElement.appendChild(createTd(student.facultyNumber));
    trElement.appendChild(createTd(student.grade));

    return trElement;
  }

}

attachEvents();