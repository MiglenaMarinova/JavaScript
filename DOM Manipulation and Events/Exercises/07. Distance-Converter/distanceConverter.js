function attachEventsListeners() {
    const [inputDistanceElements,convertButton, outputDistanceElements] = document.getElementsByTagName('input');
    const [inputUnitOption, outputUnitOption] = document.getElementsByTagName('select');

    let convertionRates = {
         'km':1000,
         'm':1,
         'cm':0.01,
         'mm':0.001,
         'mi':1609.34,
         'yrd':0.9144,
         'ft':0.3048,
         'in':0.0254,
    }

    convertButton.addEventListener('click', () => {
        let inputDistance = inputDistanceElements.value;
        let inputUnits = inputUnitOption.value;
        let outputUnit = outputUnitOption.value;

        let result = inputDistance * convertionRates[inputUnits] / convertionRates[outputUnit];

        outputDistanceElements.value = result;

    });    
}