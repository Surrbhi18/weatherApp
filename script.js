const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const weather_video = document.querySelector('.back-video');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');


const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(inputBox){
    const api_key = 'f58c799c2ccb3f5100e11b0c519bf4ad';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputBox}&appid=${api_key}`;
    

    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log(weather_data);
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "assets/cloud.png";
            weather_video.src = "assets/cloud.mp4";
            break;
        case 'Clear':
            weather_img.src = "assets/clear.png";
            weather_video.src = "assets/clear.mp4";
            break;
        case 'Rain':
            weather_img.src = "assets/rain.png";
            weather_video.src = "assets/rain.mp4";
            break;
        case 'Mist':
            weather_img.src = "assets/mist.png";
            weather_video.src = "assets/mist.mp4";
            break;
        case 'Snow':
            weather_img.src = "assets/snow.png";
            weather_video.src = "assets/snow.mp4";
            break;

    }
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});


