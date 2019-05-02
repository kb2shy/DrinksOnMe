import React, { Component } from 'react';
import '../App.css'

export default class DisplayContainer extends Component {

  render() {
    return (
      <div className="displaycontainer-div">
        <h1>Cocktail Info</h1>
        <h1>{this.props.cocktail.name}</h1>
        <h3>Description</h3>
        <p>{this.props.cocktail.description}</p>
        <h3>Instructions</h3>
        <p>{this.props.cocktail.instructions}</p>
      </div>
    )
  }
}
