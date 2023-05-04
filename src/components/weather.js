// import getWeatherByCityName from './weather';
// <getWeatherByCityName/>

// let weatherAPIKey = '7ad69e7dc1521b2aaaf8e597fe4a96df';
// let weatherBaseEndpoint = 'api.openweathermap.org/data/2.5/weather?units=metric&appid='+weatherAPIKey;

// let getWeatherByCityName = async (city) => {
//     let endpoint = weatherBaseEndpoint + "q=" + city;
//     let response = await fetch(endpoint);
//     let weather = await response.json;
//     console.log(weather);
// }

// getWeatherByCityName("Austin");

// export default getWeatherByCityName;

let weatherAPIKey = '7ad69e7dc1521b2aaaf8e597fe4a96df';
let weatherBaseEndpoint = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid='+weatherAPIKey;

let getWeatherByCityName = async (city) => {
    let endpoint = weatherBaseEndpoint + "&q=" + city;
    let response = await fetch(endpoint);
    let weather = await response.json();
    return weather;
}

let updateWeatherInfo = (weather) => {
    let weatherInfoDiv = document.getElementById('weather-info');
    if (weather.cod === "404") {
        weatherInfoDiv.innerHTML = "City not found";
    } else {
        let weatherHtml = `${weather.name}: ${weather.main.temp} &#8451;`;
        weatherInfoDiv.innerHTML = weatherHtml;
    }
}

let displayWeatherByCityName = async (city) => {
    let weather = await getWeatherByCityName(city);
    updateWeatherInfo(weather);
}

displayWeatherByCityName("College Station");

export default getWeatherByCityName;