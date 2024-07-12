document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', fetchPollutionData);
});

function fetchPollutionData() {
    const city = document.getElementById('city').value.trim();
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    // Generate random pollution data
    const pollutionData = generateRandomPollutionData();

    displayPollutionData(pollutionData);
}

function generateRandomPollutionData() {
    return {
        co: (Math.random() * 10).toFixed(2),
        no: (Math.random() * 10).toFixed(2),
        no2: (Math.random() * 10).toFixed(2),
        o3: (Math.random() * 10).toFixed(2),
        so2: (Math.random() * 10).toFixed(2),
        pm2_5: (Math.random() * 10).toFixed(2),
        pm10: (Math.random() * 10).toFixed(2)
    };
}

function displayPollutionData(data) {
    const dataDiv = document.getElementById('data');
    dataDiv.innerHTML = `
        <p><strong>CO:</strong> ${data.co} μg/m³</p>
        <p><strong>NO:</strong> ${data.no} μg/m³</p>
        <p><strong>NO2:</strong> ${data.no2} μg/m³</p>
        <p><strong>O3:</strong> ${data.o3} μg/m³</p>
        <p><strong>SO2:</strong> ${data.so2} μg/m³</p>
        <p><strong>PM2.5:</strong> ${data.pm2_5} μg/m³</p>
        <p><strong>PM10:</strong> ${data.pm10} μg/m³</p>
    `;
}