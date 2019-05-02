import React, { Component } from 'react';
import '../App.css'

export default class DisplayContainer extends Component {

  render() {
    return (
      <div>
        <h1>Display Container</h1>
        <h1>{this.props.cocktail.name}</h1>
        <p>{this.props.cocktail.description}</p>
        <p>{this.props.cocktail.instructions}</p>
      </div>
    )
  }
}
