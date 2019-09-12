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
    depart = req.query.d;
    arrive = req.query.a;
    var url = `http://aviation-edge.com/v2/public/routes?key=${process.env.REACT_APP_API_KEY}&departureIata=${depart}&arrivalIata=${arrive}`
    axios.get(url)
        .then ((response) => {
          res.send(response.data);
            }).catch(err => res.json(err.message));  
})

app.get('/weather', (req, res) => {
    cityCode = req.query.c
    var url = `http://api.openweathermap.org/data/2.5/forecast?id=${cityCode}&APPID=${process.env.REACT_APP_WEATHER_KEY}`
    axios.get(url)
        .then ((response) => {
          res.send(response.data);
            }).catch(err => res.json(err.message));  
})

module.exports = app;
