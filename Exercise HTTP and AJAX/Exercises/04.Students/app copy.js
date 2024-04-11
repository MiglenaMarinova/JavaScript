async function attachEvents() {
  const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

  const tableBodyElement = document.querySelector('#results tbody');

  const submitButtonElement = document.getElementById('submit');

  submitButtonElement.addEventListener('click', onload);

  const getResponse = await fetch(baseUrl);
  const students = await getResponse.json();

  Object.values(students).forEach((student) => {

    rowCreator(student);

  });

  async function onload() {
    const firstNameInputElement = document.querySelector('input[name=firstName]');
    const lastNameInputElement = document.querySelector('input[name=lastName]');
    const facultyNumberInputElement = document.querySelector('input[name=facultyNumber]');
    const gradeInputElement = document.querySelector('input[name=grade]');

    let isValidPostRequest =
      firstNameInputElement.value !== '' &&
      lastNameInputElement.value !== '' &&
      facultyNumberInputElement.value !== '' &&
      gradeInputElement.value !== '';

    if (isValidPostRequest) {
      const newStudent = {
        firstName: firstNameInputElement.value,
        lastName: lastNameInputElement.value,
        facultyNumber: facultyNumberInputElement.value,
        grade: gradeInputElement.value,
      };

      await fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(newStudent)
      })

      rowCreator(newStudent);

      firstNameInputElement.value = '';
      lastNameInputElement.value = '';
      facultyNumberInputElement.value = '';
      gradeInputElement.value = '';

    }

  }

  function rowCreator(student) {
    const row = document.createElement('tr');

    row.innerHTML = `
    
    <tr>
    <td>${student.firstName}</td>
    <td>${student.lastName}</td>
    <td>${student.facultyNumber}</td>
    <td>${student.grade}</td>
    </tr>
    `;
    tableBodyElement.appendChild(row);
  }



}

attachEvents();