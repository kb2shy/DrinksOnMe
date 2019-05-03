import React, { Component } from 'react';
import Cocktail from '../components/Cocktail'
import '../App.css'

export default class DisplayContainer extends Component {

  render() {
    return (
      <div className="displaycontainer-div">
        <div className="displaycontainer-header">
          <h1>Cocktail info</h1>
        </div>
        <div className="displayCocktail">
          <Cocktail cocktail={this.props.cocktail}/>
        </div>
      </div>
    )
  }
}
