import React, { Component } from 'react';

export default class Cocktail extends Component {

  ingredients = () => {
    if (this.props.cocktail.proportions) {
      let proportions = this.props.cocktail.proportions;
      // console.log(proportions instanceof Object)
      let propArray = Array.prototype.slice.call(proportions);
      // console.log(propArray instanceof Array)
      return propArray.map(ing => {
        return <li>{ing.ingredient_name}</li>;
      })
    }
  }

  render() {
    return (
      <div className="displaycontainer-div">
        <h3>Description</h3>
        <p>{this.props.cocktail.description}</p>
        <h3>Instructions</h3>
        <p>{this.props.cocktail.instructions}</p>
        <h4>Ingredients</h4>
        <ul>{this.ingredients()}</ul>
      </div>
    )
  }
}
