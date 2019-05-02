import React, { Component } from 'react';

export default class Cocktail extends Component {

  render() {
    return (
      <div onClick={() => this.props.handleClick(this.props.cocktail)}>
        <h3>{this.props.cocktail.name}</h3>
      </div>
    )
  }
}
