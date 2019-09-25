const fetch = require('node-fetch');

const weatherStation = (
  () => {
    const displayWeather = (data) => {
      const { icon } = data.weather[0];
      const { humidity, temp, temp_max, temp_min } = data.main;

      const card = document.querySelector('#card');
      const img = document.querySelector('#icon');
      const tempElem = document.querySelector('#temperature');
      const maxTempElem = document.querySelector('#max_temp');
      const minTempElem = document.querySelector('#min_temp');
      const humidityElem = document.querySelector('#humidity');

      card.style.display = 'block';
      tempElem.innerText = temp;
      maxTempElem.innerText = temp_max;
      minTempElem.innerText = temp_min;
      humidityElem.innerText = humidity;
      img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    };

    const getWeather = async (city, unit) => {
      const APP_ID = process.env.APP_ID;
      const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
      const url = `${baseUrl}q=${city}&units=${unit}&appid=${APP_ID}`;
      const response = await fetch(url);
      const data = await response.json();

      displayWeather(data);
    };

    return {
      getWeather,
    };
  }
)();

export default weatherStation;
