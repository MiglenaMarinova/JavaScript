const orangeElement = document.querySelector('.orange');
const greenElement = document.querySelector('.green');
const yellowElement = document.querySelector('.yellow');

orangeElement.addEventListener('click', (e) => {
    console.log('Orange clicked');
}, {capture: true}); // с capture: true казваме, че event-а искаме да се изпълни НЕ на bubbling, а на capturring фазата

greenElement.addEventListener('click', (e) => {
    e.stopPropagation();  // тука се изпълнява, но спира изпълнението нагоре по bubbling-а
    console.log('Green clicked');
});

yellowElement.addEventListener('click', (e) => {
    console.log('Yellow clicked');
});

