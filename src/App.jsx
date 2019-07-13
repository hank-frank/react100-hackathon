import React, { Component } from 'react';
import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();

import Search from './Search.jsx';
import Display from './Display.jsx';

class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        flightData: [],
        weatherData: [],
        temp: "",
        humidity: "",
        description: "",
        name: "",
        departForWeather: "",
        arriveForWeather: "",
      }

      this.retrieveFlightInfo = this.retrieveFlightInfo.bind(this);
      this.retrieveWeatherInfo = this.retrieveWeatherInfo.bind(this);
    }

  retrieveFlightInfo(depart, arrive) {
          console.log("depart before setState for Weather: " + depart);
          // console.log(arrive);
          this.setState({
            departForWeather: depart,
            arriveForWeather: arrive
          })
          // console.log("setState for departForWeather: " + this.state.departForWeather)

       //axios call to  y own server where I set up a /route for /weather. Passing it variables by putting them into the route as key/val pairs. Then taking the reponse sent by my server and working with the data sent. 
      axios 
        .get(
          `/flight?d=${depart}&a=${arrive}`
        )
        .then (res => {
          console.log("from app.jsx res.data: " + res.data)
          this.setState({
            flightData: res.data
          })
        })
        .catch(err => console.log(err));
}

  retrieveWeatherInfo(departForWeather, arriveForWeather) {
    
    function city(departForWeather, arriveForWeather) {
      // console.log("from retrieveWeatherInfo" + departForWeather);
    if (departForWeather  === 'LAS' || arriveForWeather === "LAS") {
        return 5506956
    }
    if (departForWeather === "SAN" || arriveForWeather === 'SAN') {
      return 5391811
    }
    if (departForWeather === "PDX" || arriveForWeather === 'PDX') {
      return 4720131
    }
    if (departForWeather === 'SEA' || arriveForWeather === 'SEA') {
      return 5809805
    }
    if (departForWeather === 'LAX' || arriveForWeather === 'LAX') {
      return 5345860
    }
    if (departForWeather === 'BUR' || arriveForWeather === 'BUR') {
      return 4885983
    }
    if (departForWeather === 'OAK' || arriveForWeather === 'OAK') {
      return 4276543
    }
    if (departForWeather === 'PHX' || arriveForWeather === 'PHX') {
      return 5308655
    }
    if (departForWeather === 'DFW' || arriveForWeather === 'DFW') {
      return 4684888
    }
    if (departForWeather === 'MCI' || arriveForWeather === 'MCI') {
      return 4273837
    }
    if (departForWeather === 'ORD' || arriveForWeather === 'ORD') {
      return 4887398
    }
    if (departForWeather === 'MSP' || arriveForWeather === 'MSP') {
      return 5037649
    }
    if (departForWeather === 'DTW' || arriveForWeather === 'DTW') {
      return 5007531
    }
    if (departForWeather === 'CLE' || arriveForWeather === 'CLE') {
      return 4188377
    }
    if (departForWeather === 'IAH' || arriveForWeather === 'IAH') {
      return 4699066
    }
    if (departForWeather === 'MSY' || arriveForWeather === 'MSY') {
      return 4335045
    }
    if (departForWeather === 'ATL' || arriveForWeather === 'ATL') {
      return 4180439
    }
    if (departForWeather === 'FLL' || arriveForWeather === 'FLL') {
      return 4155966
    }
    if (departForWeather === 'MCO' || arriveForWeather === 'MCO') {
      return 4167147
    }
    if (departForWeather === 'TPA' || arriveForWeather === 'TPA') {
      return 4174757
    }
    if (departForWeather === 'RSW' || arriveForWeather === 'RSW') {
      return 4155995
    }
    if (departForWeather === 'MYR' || arriveForWeather === 'MYR') {
      return 4588718
    }
    if (departForWeather === 'BWI' || arriveForWeather === 'BWI') {
      return 4347778
    }
    if (departForWeather === 'PIT' || arriveForWeather === 'PIT') {
      return 4277241
    }
    if (departForWeather === 'PHL' || arriveForWeather === 'PHL') {
      return 4560349
    }
    if (departForWeather === 'LGA' || arriveForWeather === 'LGA') {
      return 5128638
    }
    if (departForWeather === 'JFK' || arriveForWeather === 'JFK') {
      return 5128638
    }
    if (departForWeather === 'BOS' || arriveForWeather === 'BOS') {
      return 4317656
    }
    if (departForWeather === 'EWR' || arriveForWeather === 'EWR') {
      return 4833930
    }
    if (departForWeather === 'DSM' || arriveForWeather === 'DSM') {
      return 4881346
    }
    if (departForWeather === 'AUS' || arriveForWeather === 'AUS') {
      return 4254010
    }
    if (departForWeather === 'SAC' || arriveForWeather === 'SAC') {
      return 8012482
    }
    if (departForWeather === 'OMA' || arriveForWeather === 'OMA') {
      return 5074472
    }
  };

  var cityCode = city(departForWeather, arriveForWeather); 

      axios
        .get(
          `/weather?c=${cityCode}`
        )
        .then (response => {
          // console.log(response.data);
      this.setState({
        weatherData: response.data,
        name: response.data.city.name,
        temp: response.data.list[0].main.temp,
        humidity: response.data.list[0].main.humidity,
        description: response.data.list[0].weather[0].description,
        })
      })
      .catch(err => console.log(err));
}

    render() {
        return (
          <div className="container">
            <h1 className="text-center text-danger mt-3">Flight Search and Weather</h1>
            <h5 className="text-center text-danger">Search for all the flihgts between two cities and see their weather</h5>
            <hr className="my-4 text-danger"></hr>
              <div className="mb-5">
                <Search 
                  retrieveFlightInfo={ this.retrieveFlightInfo }
                ></Search>
              </div>
              <div className="card w-100 mb-5">
              <table className="table-striped table-hover table-condensed">
                  <thead className="tableHead">
                      <tr>
                          <td>Departure Airport</td>
                          <td>Arrival Airport</td>
                          <td>Departure Time</td>
                          <td>Arrival Time</td>
                          <td>Flight Number</td>
                          <td>Airline</td>
                      </tr>
                  </thead>
                  <tbody>
                        { 
                      this.state.flightData.map(flightData => (
                      <Display
                          retrieveWeatherInfo={this.retrieveWeatherInfo}
                          key={flightData.flightNumber + flightData.arrivalTime}
                          departureIata={flightData.departureIata}
                          arrivalIata={flightData.arrivalIata}
                          departureTime={flightData.departureTime}
                          arrivalTime={flightData.arrivalTime}
                          airlineIata={flightData.airlineIata}
                          flightNumber={flightData.flightNumber} 
                          departForWeather={this.state.departForWeather}
                          arriveForWeather={ this.state.arriveForWeather }/>
                      ))
                          }
                  </tbody>
                </table>
            </div>
            <div className="card w-100">
            <table className="table-striped table-hover table-condensed mb-5">
                <thead className="tableHead">
                    <tr>
                        <td>Name</td>
                        <td>Temperature</td>
                        <td>Humidity</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.name}</td>
                        <td>{this.state.temp}</td>
                        <td>{this.state.humidity}</td>
                        <td>{this.state.description}</td>
                    </tr>
                </tbody> 
                </table>
                </div>
 </div>
        )
    }
};

export default App; 
