// 

const apiKey = "af7eeacdd5fdbdce44752870fb9f569a0";
const submitBTN = document.querySelector("#submit-btn");
const locationInput = document.querySelector("#location");

submitBTN.addEventListener("click", function(event){
    event.preventDefault();
    const location = locationInput.value;
    const url = "api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}";


    fetch(url)
    .then(response => response.json())
    .then(data=> {
        //convert Kelvin to Fahrenheit
        const high = (32 + (data.main.temp_max -273.15) *9/5).toFixed(1) + '°F';
        const lOW = (32 + (data.main.temp_mIN -273.15) *9/5).toFixed(1) + '°F';
        const forecast = data.weather[0].descrption;
        const humidity = data.main.humidity + '%';



        // Update the html with Data
        document.querySelector('#high').innerHTML = high;
        document.querySelector('#low').innerHTML = lOW;
        document.querySelector('#forecast').innerHTML = forecast;
        document.querySelector('#humidity').innerHTML = humidity;
    });

});




