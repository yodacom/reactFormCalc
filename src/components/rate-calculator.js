import React from 'react';
import Component from 'react';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 1,
      dayRate: 1,
      numHours: 1,
    };

    this.setDayRate = this.setDayRate.bind(this);
  }

    // Method to update the day rate value in the state.
    // This method is bound on line 15 in the constructor
    // Not called in an arrow function
  setDayRate(dayRate) {
    this.setState({
      dayRate,
    });
  }

    // Method to set the hours in the state
    // this is called in an arrow function in the NumberInput below, so no binding necessary
  setHours(numHours) {
    this.setState({
      numHours,
    });
  }


    // write a method that uses the values from the state
    // to calculate the hourly rate

  Wage() {
    return this.state.dayRate / this.state.numHours;
  }


  render() {
    return (
      <form onChange={this.onChange}>

        <NumberInput id="dayrate" label="Day rate" min={0} max={5000} onAction={this.setDayRate} />

        <NumberInput
          id="hours"
          label="Hours"
          min={1}
          max={12}
          onAction={hours => this.setHours(hours)}
        />
        <Output id="hourly-rate" label="Hourly rate" value={this.Wage()} />
      </form>
    );
  }
}
