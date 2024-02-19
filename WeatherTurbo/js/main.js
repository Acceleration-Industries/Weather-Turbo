document.getElementById('fetchWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey ='084d758c0491c93500280131a284b9c1';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const display = document.getElementById('weatherDisplay');
            display.style.display = 'block';
            display.innerHTML = `
                <div class="weather-info">
                    <button class="close-btn" onclick="closeWeatherDisplay()">X</button>
                    <h2>Weather in ${data.name}</h2>
                    <p>Forecast: ${data.weather[0].main}</p>
                    <p>High: ${data.main.temp_max}°F</p>
                    <p>Low: ${data.main.temp_min}°F</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                </div>
            `;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            document.getElementById('weatherDisplay').innerHTML = `<p>Error fetching weather data. Please try again.</p>`;
        });
});

function closeWeatherDisplay() {
    document.getElementById('weatherDisplay').style.display = 'none';
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snow');
    const size = Math.random() * 2 + 1;
    const duration = Math.random() * 3 + 2;
    const position = Math.random() * (window.innerWidth - size * 3) + size * 1.5;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size * 3}px`;
    snowflake.style.left = `${position}px`;
    snowflake.style.position = 'absolute';
    snowflake.style.backgroundColor = 'white';
    snowflake.style.borderRadius = '50%';
    snowflake.style.top = `-${size * 3}px`;
    snowflake.style.animation = `fall ${duration}s linear forwards`;
    document.body.appendChild(snowflake);
    snowflake.addEventListener('animationend', function() {
        snowflake.remove();
    });
}

setInterval(createSnowflake, 1);
setInterval(createSnowflake, 200);

function createLargeSnowflake() {
    const snowflake = document.createElement('div');
    const size = Math.random() * 5 + 3;
    const position = Math.random() * window.innerWidth;
    const duration = Math.random() * 5 + 4;
    snowflake.classList.add('snow', 'large');
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size * 3}px`;
    snowflake.style.left = `${position}px`;
    snowflake.style.position = 'absolute';
    snowflake.style.backgroundColor = 'white';
    snowflake.style.borderRadius = '50%';
    snowflake.style.top = `-${size * 3}px`;
    snowflake.style.animation = `fallLarge ${duration}s linear forwards`;
    snowflake.addEventListener('animationend', function() {
    snowflake.remove();
    document.body.appendChild(snowflake);
    });
}

setInterval(createLargeSnowflake, 700);

function createWideSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snow', 'wide');
    const size = Math.random() * 2 + 1;
    const position = Math.random() * window.innerWidth;
    const duration = Math.random() * 10 + 5;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size * 3}px`;
    snowflake.style.left = `${position}px`;
    snowflake.style.position = 'absolute';
    snowflake.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    snowflake.style.borderRadius = '50%';
    snowflake.style.top = `-${size * 3}px`;
    snowflake.style.animation = `fallWide ${duration}s linear infinite`;
    document.body.appendChild(snowflake);
    snowflake.addEventListener('animationend', function() {
        snowflake.remove();
    });
}

setInterval(createWideSnowflake, 300);

function createVerticalSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snow', 'vertical');
    const size = Math.random() * 2 + 1;
    const position = Math.random() * window.innerWidth;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size * 3}px`;
    snowflake.style.left = `${position}px`;
    snowflake.style.position = 'absolute';
    snowflake.style.backgroundColor = 'white';
    snowflake.style.borderRadius = '50%';
    snowflake.style.top = `-${size * 3}px`;
    snowflake.style.animation = `fallStraight ${Math.random() * 3 + 5}s linear infinite`;
    document.body.appendChild(snowflake);
    snowflake.addEventListener('animationend', function() {
        snowflake.remove();
    });
}

setInterval(createVerticalSnowflake, 100);
function createLeftDriftingSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snow', 'left-drift');
    const size = Math.random() * 2 + 1;
    const position = Math.random() * window.innerWidth;
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size * 3}px`;
    snowflake.style.left = `${position}px`;
    snowflake.style.position = 'absolute';
    snowflake.style.backgroundColor = 'white';
    snowflake.style.borderRadius = '50%';
    snowflake.style.top = `-${size * 3}px`;
    snowflake.style.animation = `fallLeft ${Math.random() * 3 + 5}s linear infinite`;
    document.body.appendChild(snowflake);
    snowflake.addEventListener('animationend', function() {
        snowflake.remove();
    });
}

setInterval(createLeftDriftingSnowflake, 31);
