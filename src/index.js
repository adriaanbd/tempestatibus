import weatherStation from './station';

const form = document.querySelector('form');

const WeatherData = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const myForm = new FormData(form);
    const city = myForm.get('city');
    const unit = myForm.get('unit');

    weatherStation.getWeather(city, unit);
  });
};

document.addEventListener('DOMContentLoaded', () => {
  WeatherData();
});
