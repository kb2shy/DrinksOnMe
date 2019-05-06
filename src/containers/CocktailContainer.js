import React, { Component } from 'react';
import '../App.css'

export default class CocktailContainer extends Component {

  cocktails = () => {
    return this.props.cocktails.map((cocktail, index) =>
      (<li key={index} cocktail={cocktail}
           onClick={() => this.props.handleCocktailClick(cocktail)}>
        {cocktail.name}</li>)
    )
  }

  render() {
    return (
      <div className="cocktailcontainer-div">

        <div className="cocktailcontainer-list">
          <h1>Cocktail List</h1>
          <ul>
            {this.cocktails()}
          </ul>
        </div>

        <div className="cocktailcontainer-buttons">
          <div>
            <button onClick={this.props.prev10}>
              <h3>Previous 10</h3>
            </button>
            <button onClick={this.props.next10}>
              <h3>Next 10</h3>
            </button>
          </div>

          <div>
            <button onClick={this.props.onCreateCocktailButton}>
              <h3>Create Cocktail</h3>
            </button>
          </div>
        </div>

      </div>
    )
  }
}
