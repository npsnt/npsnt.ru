function fetchTemperature() {
    fetch('https://lk.npsnt.ru/temperature')
        .then(response => response.json())
        .then(json => {
            if (json.hasOwnProperty('Temperature')) {
                document.getElementById("temperature").innerText = json.Temperature + ' \u2103'
            } else {
                console.log('Failed to fetch temperature, reason: ' + json.error)
            }
        })
}