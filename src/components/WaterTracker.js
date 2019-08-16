import React, { Component } from 'react';

export default class WaterTracker extends Component {
  state = {
    water: 0,
    amount: 0
  }

  settingAmount = ({ target }) => {
    this.setState({ amount: Number.parseInt(target.value) });
  }

  handleWaterIntake = (event) => {
    event.preventDefault();
    this.setState(state => {
      return {
        water: state.amount + state.water,
      };
    });
  }

  render() {
    const { water } = this.state;
    return (
      <>
        <form onSubmit={(e) => this.handleWaterIntake(e)}>
          <input onChange={this.settingAmount} name='ounces-drank' type='number' />
          <button>Submit</button>
        </form>
        <h4>You drank {water}oz of water!</h4>
      </>
    );
  }
}
