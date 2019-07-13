const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();


const app = express();


app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

//this is the /route. I capture the value of the key/val pairs to use as variables in the URL. Then make the axios call to the API here, sending the response.data to myself in my .jsx file. 
app.get('/flight', (req, res) => {
    console.log("from server .get: " + process.env.REACT_APP_API_KEY);
    console.log(req.query.d)
    depart = req.query.d;
    arrive = req.query.a;

    var url = `http://aviation-edge.com/v2/public/routes?key=${process.env.REACT_APP_API_KEY}&departureIata=${depart}&arrivalIata=${arrive}`
    console.log(url);

    axios.get(url)
        .then ((response) => {
        console.log("res.data from server: "+ response.data)
          res.send(response.data);
            }).catch(err => res.json(err.message));  
})

app.get('/weather', (req, res) => {
    cityCode = req.query.c
    console.log(req.query.c);

    var url = `http://api.openweathermap.org/data/2.5/forecast?id=${cityCode}&APPID=${process.env.REACT_APP_WEATHER_KEY}`
    console.log(url);

    axios.get(url)
        .then ((response) => {
        console.log("res.data from server: "+ response.data)
          res.send(response.data);
            }).catch(err => res.json(err.message));  
})

module.exports = app;
