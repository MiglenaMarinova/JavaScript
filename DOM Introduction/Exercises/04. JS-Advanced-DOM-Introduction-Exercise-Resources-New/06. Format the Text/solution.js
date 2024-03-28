function solve() {
  const inputElement = document.getElementById('input').value;
  const otputElement = document.getElementById('output');
  let input = inputElement.split('.');

  input = input
    .filter(el => el.length > 0)
    .map(el => el += '.');


  while(input.length > 0){
    const para = document.createElement('p');

    //para.textContent = input.splice(0, 3).join('');

    const node = document.createTextNode(input.splice(0, 3).join(''));
    para.appendChild(node);
    
    otputElement.appendChild(para);
    
  }   
  
}