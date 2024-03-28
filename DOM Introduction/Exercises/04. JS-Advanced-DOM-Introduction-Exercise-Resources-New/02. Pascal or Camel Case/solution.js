function solve() {
  const textElement = document.getElementById('text').value.toLowerCase();
  const conventionElemnt = document.getElementById('naming-convention').value;
  const resultOutput = document.getElementById('result');

  let text = textElement.split(' ');
  let sentence = [];
   
  if(conventionElemnt === 'Camel Case'){
    sentence.push(text[0]);
    for (let index = 1; index < text.length; index++) {
      sentence.push(text[index].charAt(0).toUpperCase() + text[index].slice(1));      
    }
    resultOutput.textContent = sentence.join('');
  }else if(conventionElemnt === 'Pascal Case'){
    for (let index = 0; index < text.length; index++) {
      sentence.push(text[index].charAt(0).toUpperCase() + text[index].slice(1));      
    }
    resultOutput.textContent = sentence.join('');    
  }else{
    resultOutput.textContent = 'Error!';
  }
  
}