//src/NumberOfEvents.js

import React, { Component } from "react";
import { ErrorAlert } from './Alert'

class NumberOfEvents extends Component {
  constructor() {
    super();
    // stting the values for the default states
    this.state = {
      numberOfEvents: 32
    };
  }


  updateNumberOfEvents = (event) => {
    const value = event.target.value;
    if (value < 1 || value > 32) {
      this.setState({
        numberOfEvents: '',
        errorText: 'Please enter a number between 1 and 32',
      })
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: ''
      });
    }
    this.props.updateEventNumbers(event.target.value);
  };



  render() {
    return (
      <div className="numberOfEvents">
        <label className="numberOfEvents__label">Number of Events</label>
        <div className='numberOfEventsAlert'>
          <ErrorAlert text={this.state.errorText} />
        </div>
        <input
          type="number"
          className="numberOfEvents__input"
          value={this.state.numberOfEvents}
          onChange={this.updateNumberOfEvents}
        ></input>
      </div>
    );
  }
}

export default NumberOfEvents;