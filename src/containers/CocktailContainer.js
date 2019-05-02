import React, { Component } from 'react';
import Cocktail from '../components/Cocktail'
import '../App.css'

export default class CocktailContainer extends Component {

  render() {
    return (
      <div>
        <h1>Cocktail List</h1>
        <ul>{this.props.cocktails.map((cocktail, index) => {
          return <Cocktail key={index} cocktail={cocktail} handleClick={this.props.handleCocktailClick}/>
        })}</ul>
      </div>
    )
  }
}
