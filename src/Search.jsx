import React, { Component } from 'react';
import axios from "axios"; 


class Search extends Component {
    constructor(props) {
      super(props);

    }



    render() {
        return (
          <div className="container">
              <div className="card">
                  <div className="card-header">
                      <p>Search for flights:</p>
                  </div>
                  <div className="card-body">
                      <label htmlFor="from">From: (city airport code)</label>
                      <input name="from"></input><br/>
                      <label htmlFor="to">To: (city airport code)</label>
                      <input name="to"></input><br/>
                      <label htmlFor="airline">On a specific airline: (optional)</label>
                      <input name="airline"></input><br/>
                  </div>
                  <div className="card-footer">
                    <button onClick={ () => this.props.test() }>Button</button>
                 </div>
              </div>
          </div>
        )
    }
};

export default Search;