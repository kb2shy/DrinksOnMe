import React, { Component } from 'react';
import '../App.css'

export default class CocktailContainer extends Component {

  cocktails = () => {
    let cocktails = this.props.cocktails.map((cocktail, index) =>
      (<li key={index} cocktail={cocktail}
           onClick={() => this.props.handleCocktailClick(cocktail)}>
        {cocktail.name}</li>)
    )
    return cocktails;
  }

  renderPrevNextButtons = () => {
    return (
      <div>
        <button onClick={this.props.prev10} ><h4>Prev 10</h4></button>
        <button onClick={this.props.next10} ><h4>Next 10</h4></button>
      </div>
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
          {this.renderPrevNextButtons()}

          <div>
            <button onClick={this.props.onCreateCocktailButton}>
              <h4>Create Cocktail</h4>
            </button>
          </div>
        </div>

      </div>
    )
  }
}
