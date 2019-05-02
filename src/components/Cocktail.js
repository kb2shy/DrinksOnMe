import React, { Component } from 'react';

export default class Cocktail extends Component {

  render() {
    return (
      <div>
        <h3>{this.props.cocktail.name}</h3>
      </div>
    )
  }
}
