const fetch = require('node-fetch');

const form = document.querySelector('form');
const APP_ID = process.env.APP_ID;
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';

const printWeatherData = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const myForm = new FormData(form);
    const city = myForm.get('city');
    const unit = myForm.get('unit');
    const url = `${baseUrl}q=${city}&units=${unit}&appid=${APP_ID}`;
    
    fetch(url).then((response) => response.json()).then((json) => {
      console.log(json);
    });
    const icon = `http://openweathermap.org/img/wn/${json.weather.icon}@2x.png`;
  });
};

document.addEventListener('DOMContentLoaded', () => {
  printWeatherData();
});
