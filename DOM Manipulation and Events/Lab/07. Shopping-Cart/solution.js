function solve() {
   //const listOfAllProducts = document.querySelectorAll('.product');
   const addProductButtonElements = document.querySelectorAll('button.add-product');
   const outputElemnt = document.querySelector('textarea');
   const checkoutButtonElement = document.querySelector('button.checkout');
   let totalPrice = 0;
   let uniqueProducts = {};

   for (const button of addProductButtonElements) {
      const productElement = button.parentElement.parentElement;
      //const productElement = button.closest('.product');

      button.addEventListener('click', (e) => {
         const productTitle = productElement.querySelector('.product-title').textContent;
         const productPrice = Number(productElement.querySelector('.product-line-price').textContent);
         
         totalPrice += productPrice;
         uniqueProducts[productTitle] = true;

         outputElemnt.textContent += `Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.\n`;

      });   
   }

   checkoutButtonElement.addEventListener('click', (e) => {
      Array.from(addProductButtonElements).forEach(button => button.setAttribute('disabled', 'disabled'));

      e.target.setAttribute('disabled', 'disabled');
      
      const list = Object.keys(uniqueProducts).join(', ');

      outputElemnt.textContent += `You bought ${list} for ${totalPrice.toFixed(2)}.`;

   });

}