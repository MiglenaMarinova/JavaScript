function solve(fruit, weightInGrams, price){

    let weightInKg = weightInGrams / 1000;

    let money = weightInKg * price;
    
    console.log(`I need $${money.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)
}

solve('apple', 1563, 2.35);