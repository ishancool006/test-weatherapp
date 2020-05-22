const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=0c723c92c93e71e6e278c3aa8cff261d&query=' + latitude + ',' + longitude+ '&units=m'
    debugger
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, '\n'+response.body.current.temperature +' is the temperature but it fealslike '+response.body.current.feelslike+' precipitaion % is'+response.body.current.precip)
        }
    })
}

module.exports = forecast