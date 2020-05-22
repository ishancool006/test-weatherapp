const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const addr= process.argv[2]
if(!addr){
    console.log('provide address')
}else{
    geocode(addr, (error, data) => {
        if(error){
            console.log(error)
        }
        forecast(data.latitude, data.longitude, (error, forecastdata) => {
            if(error){
                console.log(error)
            }
            console.log(data.location)
             console.log('Data:-', forecastdata)
         })
    })
}

