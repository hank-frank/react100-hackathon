import React, { Component } from 'react';
// import Flight from './Flight.jsx';


class Display extends Component {
    constructor(props) {
      super(props);

    }

    render() {
        console.log("from display: " + this.props.departForWeather)
        
        return (
                <tr>
                    <td><a href="#" onClick={ () => this.props.retrieveWeatherInfo(this.props.departForWeather, this.props.arriveForWeather) }>{this.props.departureIata}</a></td>
                    <td><a href="#" onClick={ () => this.props.retrieveWeatherInfo() }>{this.props.arrivalIata}</a></td>
                    <td>{this.props.departureTime}</td>
                    <td>{this.props.arrivalTime}</td>
                    <td>{this.props.flightNumber}</td>
                    <td>{this.props.airlineIata}</td>
                </tr>
        )
    }
};

export default Display;