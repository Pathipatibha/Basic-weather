async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    const weatherDiv = document.getElementById('weatherResult');
    weatherDiv.innerHTML = "Loading...";
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
  
      const data = await response.json();
      const { name, main, weather, wind } = data;
  
      weatherDiv.innerHTML = `
        <h2>Weather in ${name}</h2>
        <p><strong>${weather[0].main}</strong> - ${weather[0].description}</p>
        <p>Temperature: ${main.temp}°C</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Wind Speed: ${wind.speed} m/s</p>
      `;
    } catch (error) {
      weatherDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
  }
  
