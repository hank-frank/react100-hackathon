import React, { Component } from 'react';
import axios from "axios"; 

import Search from './Search.jsx';

class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        flightData: [],
      }

      this.test = this.test.bind(this);
      // this.retrieveFlightInfo = this.retrieveFlightInfo.bind(this);
    }

  test(){
    console.log(process.envREACT_APP_TEST_KEY)
  }

//   retrieveFlightInfo() {
//       axios 
//         .get(
//           `http://aviation-edge.com/v2/public/routes?key=${process.env.REACT_APP_TEST_KEY}&departureIata=SAN&arrivalIata=LAS`
//         )
//         .then (res => {
//           console.log(res.data);
//           this.setState({
//             flightData: res.data
//           })
//         })
//         .catch(err => console.log(err));
// }

    render() {
        return (
          <div className="container">
              <p>test</p>
              <Search 
                retrieveFlightInfo={ this.retrieveFlightInfo } 
                test={ this.test }
              ></Search>
          </div>
        )
    }
};

export default App; 