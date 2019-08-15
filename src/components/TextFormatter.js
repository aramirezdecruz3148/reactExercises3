import React, { Component } from 'react';

export default class TextFormatter extends Component {
  state = {
    text: '',
    color: ''
  }

  handleTextPrinting = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { text, color } = this.state;

    return (
      <>
        <input name='text' value={text} type='text' onChange={this.handleTextPrinting} />
        <input name='color' value ={color} type='color' onChange={this.handleTextPrinting} />
        <pre style={{ color: color }}>{text}</pre>
      </>
    );
  }
}

