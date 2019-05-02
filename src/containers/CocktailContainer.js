import React, { Component } from 'react';
import Cocktail from '../components/Cocktail'

export default class CocktailContainer extends Component {

  render() {
    return (
      <div>
        <h1>Cocktail List</h1>
        <ul>{this.props.cocktails.map((cocktail, index) => {
          return <Cocktail key={index} cocktail={cocktail}/>
        })}</ul>
      </div>
    )
  }
}
