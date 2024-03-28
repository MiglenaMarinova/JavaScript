function search() {
   const townElemnts = Array.from(document.querySelectorAll('li'));
   console.log(townElemnts);
   const serchedTextElemnt = document.getElementById('searchText').value;
   const resultElemnt = document.getElementById('result');
   let countMatches = 0;

   for (const town of townElemnts) {
      town.style.fontWeight = '';
      town.style.textDecoration = '';
      
   }

   for (const town of townElemnts) {

      if(town.textContent.includes(serchedTextElemnt)){
         countMatches ++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }
   }

   resultElemnt.textContent = `${countMatches} matches found`;

}

