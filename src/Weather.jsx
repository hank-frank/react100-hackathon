import React, { Component } from 'react';



class Weather extends Component {
    constructor(props) {
      super(props);

    }

    render() {
        return (
                    <tr>
                        <td>test till api key kicks on</td>
                        <td>{this.props.main.temp}</td>
                        <td>{this.main.humidity}</td>
                        <td>{this.props.weather.description}</td>
                    </tr>
        )
    }
};

export default Weather;