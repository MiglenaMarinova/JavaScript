function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const searchField = document.getElementById('searchField');
      const tableRowElemnts = Array.from(document.querySelectorAll('.container tbody tr'));

      for (const row of tableRowElemnts) {
         row.classList.remove('select');
         let dataElements = Array.from(row.children);
         
         for (const data of dataElements) {
            if(data.textContent.includes(searchField.value)){
               row.classList = 'select';
            }
         }
      }
   }
}