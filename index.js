const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found'); 

search.addEventListener('click', (event) => {
    const APIKey = '9737191f151931734b58d42c7c03ed87';
    const city = document.querySelector('.search-box input').Value;
    if (city == '')
            return;
            fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}')
           .then(response => console.log(response.json()))


}); 
