async function getWeather() {
    var cityInput = document.getElementById('cityInput').value;
    var weatherInfo = document.getElementById('weatherInfo');
  
    if (cityInput.trim() !== '') {
      try {
        // Replace 'YOUR_API_KEY' with your actual API key from a weather API provider
        var apiKey = 'YOUR_API_KEY';
        var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;
  
        var response = await fetch(apiUrl);
        var data = await response.json();
  
        if (response.ok) {
          var temperature = data.main.temp;
          var description = data.weather[0].description;
  
          weatherInfo.innerHTML = `Weather in ${cityInput}: ${description}, Temperature: ${temperature}°C`;
        } else {
          weatherInfo.innerHTML = `Error: ${data.message}`;
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherInfo.innerHTML = 'An error occurred while fetching weather data.';
      }
    } else {
      weatherInfo.innerHTML = 'Please enter a city.';
    }
  }
  