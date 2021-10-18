let weatherErrorsCount = 0
const weatherClient = new window.weatherService.ru.npsnt.service.weather.WeatherServiceClient(host)
function fetchTemperature(maxErrors) {
    weatherClient.latestTemp()
        .then(
            temp => {
                weatherErrorsCount = 0
                document.getElementById("temperature").innerText = temp.celsius + ' \u2103'
            },
            error => {
                weatherErrorsCount++
                console.log("Error while fetching weather: " + error + ", errorsCount = " + weatherErrorsCount)
                if (weatherErrorsCount > maxErrors) {
                    document.getElementById("temperature").innerText = ''
                }
            })
}

const maxErrors = 10
fetchTemperature(maxErrors);
setInterval(fetchTemperature, 300000, maxErrors)