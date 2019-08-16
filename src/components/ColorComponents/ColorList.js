import React, { Component } from 'react';
import CreateColor from './CreateColor';
import Colors from './Colors';

class ColorList extends Component {
  state = {
    name: '',
    hex: '',
    colors: []
  }

  addColor = event => {
    const colorName = event.target[0].value;
    const colorHex = event.target[1].value;
    event.preventDefault();
    this.setState({ colors: [...this.state.colors, { name: colorName, hex: colorHex }] });
  }

  render() { 
    return (
      <>
        <CreateColor addColor={this.addColor} />
        <Colors colors={this.state.colors}/>
      </>
    );
  }
}
 
export default ColorList;
