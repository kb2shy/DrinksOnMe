import React, { Component } from 'react';
import '../App.css'

export default class CocktailContainer extends Component {

  cocktails = () => {
    return this.props.cocktails.map((cocktail, index) =>
      (<li key={index} cocktail={cocktail}
           onClick={() => console.log("This cocktail clicked", cocktail)}>
        {cocktail.name}</li>)
    )
  }

  render() {
    return (
      <div className="cocktailcontainer-div">
        <h1>Cocktail List</h1>
        <ul>
          {this.cocktails()}
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
