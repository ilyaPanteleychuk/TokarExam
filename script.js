async function getWeather() {
  const apiKey = '5023daa3b1dcebaba14f03a5db284423';
  const city = document.getElementById('city-input').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${city}&appid=${apiKey}&units=metric&lang=ua`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Місто не знайдено');

    const data = await response.json();
    document.getElementById('temperature').textContent = `Температура: ${data.main.temp} °C`;
    document.getElementById('humidity').textContent = `Вологість: ${data.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `Швидкість вітру: ${data.wind.speed} м/с`;
  } catch (error) {
    alert(error.message);
  }
}