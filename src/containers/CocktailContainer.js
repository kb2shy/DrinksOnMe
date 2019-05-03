import React, { Component } from 'react';
import Cocktail from '../components/Cocktail'
import '../App.css'

export default class CocktailContainer extends Component {

  render() {
    return (
      <div className="cocktailcontainer-div">
        <h1>Cocktail List</h1>
        <ul>{this.props.cocktails.map((cocktail, index) => {
          return <Cocktail key={index} cocktail={cocktail}
                  handleCocktailClick={this.props.handleCocktailClick}/>
                })}
        </ul>
        <button onClick={this.props.prev5}>
          <h3>Previous prev 5</h3>
        </button>
        <button onClick={this.props.next5}>
          <h3>Display next 5</h3>
        </button>
      </div>
    )
  }
}
