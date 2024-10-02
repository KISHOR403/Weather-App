const apiKey = "a645072b100926f83984a31d6c04b489";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML =
            Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/cloudy.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Heavy-Rain") {
            weatherIcon.src = "images/Heavy Rain.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
searchBtn.addEventListener("click", () => {
    searchBtn.classList.add("pressed");
    checkWeather(searchBox.value);
    setTimeout(function(){
        searchBtn.classList.remove("pressed");
    }, 100);
    
});

document.getElementById('searchBtn').addEventListener('click', function() {
        const city = document.getElementById('cityname').value;
        if (city === "") {
            alert("Please enter a city name!");
        } else {
            // You can add functionality here to fetch weather data using an API
            console.log("Searching weather for: " + city);
        }
    });
    