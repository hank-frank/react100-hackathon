import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
      super(props);

        this.state = {
            depart: "",
            arrive: "",
            airline: "",
        }
      this.onChange = this.onChange.bind(this);
    }

  onChange(e) {
      this.setState({ [e.target.name]: e.target.value })
    }

  render() {
      return (
        <div className="container">
            <div className="card w-100">
                <div className="card-header">
                    <p className="mb-0">Search for flights:</p>
                </div>
                <div className="card-body">
                    <label htmlFor="depart">From: (3 char airport code)</label>
                    <input 
                      id="depart"
                      name="depart"
                      onChange={ this.onChange }
                      value={ this.state.depart }
                      type="text"
                    ></input><br/>
                    <label htmlFor="arrive">To: (3 char airport code)</label>
                    <input 
                      id="arrive"
                      name="arrive"
                      onChange={ this.onChange }
                      value={ this.state.arrive }
                      type="text"
                    ></input><br/>
                    {/* <label htmlFor="airline">On a specific airline: (optional must be 3 char airline code)</label>
                    <input 
                      id="airline"
                      name="airline"
                      onChange={ this.onChange }
                      value={ this.state.airline }
                      type="text"
                    ></input><br/> */}
                </div>
                <div className="card-footer">
                  <button onClick={ () => this.props.retrieveFlightInfo(this.state.depart, this.state.arrive, this.state.airline) }>Submit!</button>
                </div>
            </div>
        </div>
        )
    }
};

export default Search;
