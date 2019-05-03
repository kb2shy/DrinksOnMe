import React, { Component } from 'react';
import Cocktail from '../components/Cocktail'
import CocktailForm from '../components/CocktailForm'
import '../App.css'

export default class DisplayContainer extends Component {

  inDisplayThis = (thisState) => {
    if (thisState === 'cocktailInfo') {
      console.log("cocktail info will be rendered")
      return <Cocktail cocktail={this.props.cocktail}/>
    } else if (thisState === 'createCocktail') {
      console.log("cocktail form will be rendered")
      return <CocktailForm cocktail={this.props.cocktail}/>
    }
  }

  render() {
    return (
      <div className="displaycontainer-div">
        {this.inDisplayThis(this.props.displayThis)}
      </div>
    )
  }
}
