function attachGradientEvents() {
    const gradientElemnt = document.getElementById('gradient');
    const resultElement = document.getElementById('result');

    gradientElemnt.addEventListener('mousemove', (event) => {
        const currentWidth = event.offsetX;
        const elementWidth = event.target.clientWidth;
        const progress =  Math.floor((currentWidth / elementWidth) * 100);
        
        resultElement.textContent = `${progress}%`;
    });

}