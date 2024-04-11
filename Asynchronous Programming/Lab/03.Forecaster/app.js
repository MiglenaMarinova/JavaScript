function attachEvents() {
    const locationsUrl = 'http://localhost:3030/jsonstore/forecaster/locations';
    const todayForecastUrl = 'http://localhost:3030/jsonstore/forecaster/today';
    const upcommingForecastUrl = 'http://localhost:3030/jsonstore/forecaster/upcoming';
    
    const locationInputElement = document.getElementById('location');
    const submitButtonElement = document.getElementById('submit');
    let divForecastElement = document.getElementById('forecast');
    
    
    const weatherSymbol = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
        'Degrees': '°',
    }
    
    
    submitButtonElement.addEventListener('click', () => {
        fetch(locationsUrl)
        .then(response => response.json())
        .then(data => {
            let currentInput = locationInputElement.value;
            let currentTown = data.find(town => town.name === currentInput);
            
            const code=currentTown.code;
            console.log(code);
            
            divForecastElement.style.display = 'block';
            
            return Promise.all([
                fetch(`${todayForecastUrl}/${code}`),
                fetch(`${upcommingForecastUrl}/${code}`),
            ]);
            
        })
        .then(responses => Promise.all(responses.map(res => res.json())))
        .then(([today, upcomming]) => {
            
            let currentCondition = today.forecast.condition;            
            
            const currentDivElement = document.getElementById('current');

            let divForecast = document.createElement('div');
            divForecast.classList.add('forecast');

            let conditionSimbolElemnt = document.createElement('span');
            conditionSimbolElemnt.classList.add('conditon');
            conditionSimbolElemnt.classList.add('symbol');
            conditionSimbolElemnt.textContent= `${weatherSymbol[currentCondition]}`;
            
            let nameSpan = document.createElement('span');
            nameSpan.classList.add('forecast-data');
            nameSpan.textContent = today.name;
            
            let degreeSpan = document.createElement('span');
            degreeSpan.classList.add('forecast-data');
            degreeSpan.textContent = `${today.forecast.low}°/${today.forecast.high}°`;

            let skySpan = document.createElement('span');
            skySpan.classList.add('forecast-data');
            skySpan.textContent = `${currentCondition}`;

            let conditionlElemnt = document.createElement('span');
            conditionlElemnt.classList.add('condition');

            conditionlElemnt.appendChild(nameSpan);
            conditionlElemnt.appendChild(degreeSpan);
            conditionlElemnt.appendChild(skySpan);

            divForecast.appendChild(conditionSimbolElemnt);
            divForecast.appendChild(conditionlElemnt);

            currentDivElement.appendChild(divForecast);

            const divUpcomingElement = document.getElementById('upcoming');

            let divForecastInfo = document.createElement('div');
            divForecastInfo.classList.add('forecast-info');

            let forecasts = upcomming.forecast;
            for (const forecast of forecasts) {

                let spanUpcoming = document.createElement('span');
                spanUpcoming.classList.add('upcoming');

                let spanSymbol = document.createElement('span');
                let upcomingCondition = forecast.condition;
                spanSymbol.classList.add('symbol');
                spanSymbol.textContent = `${weatherSymbol[upcomingCondition]}`;

                let spanDegree = document.createElement('span');
                spanDegree.classList.add('forecast-data');
                spanDegree.textContent = `${forecast.low}°/${forecast.high}°`;

                let spanSky = document.createElement('span');
                spanSky.classList.add('forecast-data');
                spanSky.textContent = `${upcomingCondition}`;

                spanUpcoming.appendChild(spanSymbol);
                spanUpcoming.appendChild(spanDegree);
                spanUpcoming.appendChild(spanSky);

                divForecastInfo.appendChild(spanUpcoming);
            }

            divUpcomingElement.appendChild(divForecastInfo);
            
        })
        .catch((error) => {
            console.log('Error');
        });
                
    });

}

attachEvents();