import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CreateColor extends Component {
  static propTypes = {
    addColor: PropTypes.func.isRequired
  }

  render() {
    return (
      <form onSubmit={(e) => this.props.addColor(e)}>
        <input name='name' type='text' placeholder='color name' />
        <input name='color' type='color' />
        <button>Submit</button>
      </form>
    );
  }
}



