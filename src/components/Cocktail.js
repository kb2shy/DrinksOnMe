import React, { Component } from 'react';

export default class Cocktail extends Component {

  ingredients = () => {
    if (this.props.cocktail.proportions) {
      let proportions = this.props.cocktail.proportions;
      // console.log(proportions instanceof Object)
      let propArray = Array.prototype.slice.call(proportions);
      // console.log(propArray instanceof Array)
      return propArray.map(ing => {
        // return info in a table format
        return (
          <tr>
            <td>{ing.ingredient_name}</td>
            <td>{ing.amount}</td>
          </tr>);
      })
    }
  }

  render() {
    return (
      <div className="cocktail-div">
        <h1>Cocktail: {this.props.cocktail.name}</h1>
        <h3>Description</h3>
        <p>{this.props.cocktail.description}</p>
        <h3>Instructions</h3>
        <p>{this.props.cocktail.instructions}</p>
        <h4>Ingredients</h4>
        <table className="cocktailingredient-table">
          <tr>
            <th>Ingredient</th>
            <th>Proportion</th>
          </tr>
          {this.ingredients()}
        </table>
      </div>
    )
  }
}
