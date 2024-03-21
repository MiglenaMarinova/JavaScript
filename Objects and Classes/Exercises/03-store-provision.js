function solve(stock, ordered){
    const products = {};

    for (let i = 0; i < stock.length; i+= 2) {
        const productName = stock[i];
        const quantity = Number(stock[i + 1]);

        products[productName] = quantity;
    }

    for (let i = 0; i < ordered.length; i+= 2) {
        const productName = ordered[i];
        const orderedQuantity = Number(ordered[i + 1]);
        
        if(products.hasOwnProperty(productName)){
            products[productName] += orderedQuantity;
        }else{
            products[productName] = orderedQuantity;
        }
        
    }

    for(let product in products){
        console.log(`${product} -> ${products[product]}`);
    }

}

function fancySolve(stock, ordered){
    const getProducts = (list) => {

        const products = {};

        for (let i = 0; i < list.length; i+=2) {
            const productName = list[i];
            const quantity = Number(list[i + 1]);

            if(!products[productName]){
               products[productName] = 0; 
            }

            products[productName] += quantity;            
        }

        return products;
    }

    //const store = getProducts(stock.concat(ordered));
    const store = getProducts([...stock, ...ordered]);

    Object.keys(store)
        .forEach(product => console.log(`${product} -> ${store[product]}`));
}



fancySolve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )