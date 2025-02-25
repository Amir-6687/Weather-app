function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "a9f5d91b305d46a989c135603252002"; // Dein API-Key
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=de`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherDiv = document.getElementById("weather");
      if (data.location) {
        const cityName = data.location.name;
        const country = data.location.country;
        const temp = data.current.temp_c;
        const humidity = data.current.humidity;
        const condition = data.current.condition.text;
        const icon = data.current.condition.icon;

        weatherDiv.innerHTML = `
                  <h2>Wetter in ${cityName}, ${country}</h2>
                  <img src="https:${icon}" alt="Wetter Icon">
                  <p>Temperatur: ${temp} °C</p>
                  <p>Luftfeuchtigkeit: ${humidity}%</p>
                  <p>Bedingung: ${condition}</p>
              `;
      } else {
        weatherDiv.innerHTML = `<p>Stadt nicht gefunden!</p>`;
      }
    })
    .catch((error) => {
      console.error("Fehler beim Abrufen der Daten:", error);
      document.getElementById(
        "weather"
      ).innerHTML = `<p>Fehler: ${error.message}</p>`;
    });
}
