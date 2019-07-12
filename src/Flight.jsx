import React, { Component } from 'react';



class Flight extends Component {
    constructor(props) {
      super(props);

    }

    render() {
        return (
          
            <tbody>
                <tr>
                    <td>{this.props.departureIata}</td>
                    <td>{this.props.arrivalIata}</td>
                    <td>{this.props.departureTime}</td>
                    <td>{this.props.arrivalTime}</td>
                    <td>{this.props.flightNumber}</td>
                    <td>{this.props.airlineIata}</td>
                </tr>
            </tbody>
          
        )
    }
};

export default Flight;
