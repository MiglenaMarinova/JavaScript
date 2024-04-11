function attachEventsListeners() {

    let daysInputElement = document.getElementById('days');
    let hoursInputElement = document.getElementById('hours');
    let minutesInputElement = document.getElementById('minutes');
    let secondsInputElement = document.getElementById('seconds');

    let daysConvertButton = document.getElementById('daysBtn');
    let hoursConvertButton = document.getElementById('hoursBtn');
    let minutesConvertButton = document.getElementById('minutesBtn');
    let secondsConvertButton = document.getElementById('secondsBtn');


    //One day is equal to 24 hours/1440 minutes/86400 seconds. 

    
    daysConvertButton.addEventListener('click', daysConverter);
    hoursConvertButton.addEventListener('click', hoursConverter);
    minutesConvertButton.addEventListener('click', minutesConverter);
    secondsConvertButton.addEventListener('click', secondsConverter);

    function daysConverter(){
        hoursInputElement.value = daysInputElement.value * 24;
        minutesInputElement.value = daysInputElement.value * 1440;
        secondsInputElement.value = daysInputElement.value * 86400;
    }

    function hoursConverter(){
        daysInputElement.value = hoursInputElement.value / 24;
        minutesInputElement.value = hoursInputElement.value * 60;
        secondsInputElement.value = minutesInputElement.value * 60;
    }

    function minutesConverter(){
        hoursInputElement.value = minutesInputElement.value / 60;
        daysInputElement.value = hoursInputElement.value / 24;
        secondsInputElement.value = minutesInputElement.value * 60;
    }

    function secondsConverter(){
        minutesInputElement.value = secondsInputElement.value / 60;
        hoursInputElement.value = minutesInputElement.value / 60;
        daysInputElement.value = hoursInputElement.value / 24;
    }
}