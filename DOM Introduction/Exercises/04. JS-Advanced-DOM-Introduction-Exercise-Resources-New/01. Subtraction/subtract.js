function subtract() {
    const firstNumber = document.getElementById('firstNumber');
    const secondNumber = document.getElementById('secondNumber');
    const result = document.getElementById('result');

    let num1 = Number(firstNumber.value);
    let num2 = Number(secondNumber.value);

    result.textContent = num1 - num2;
}