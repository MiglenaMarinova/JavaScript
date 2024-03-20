function getProductPrice(product){
    switch (product) {
        case 'coffee':
            return 1.5;
        case 'water':
            return 1.00;
        case 'coke':
            return 1.40;
        case 'snacks':
            return 2.00;
    }
}


function solve(product, quantity){
    const productPrice = getProductPrice(product);
    const totalPrice = productPrice * quantity;

    console.log(totalPrice.toFixed(2));
}

solve("coffee", 2)