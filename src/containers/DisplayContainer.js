import React, { Component } from 'react';
import Cocktail from '../components/Cocktail'
import CocktailForm2 from '../components/CocktailForm2'
import '../App.css'

export default class DisplayContainer extends Component {

  inDisplayThis = (thisState) => {
    if (thisState === 'cocktailInfo') {
      // console.log("cocktail info will be rendered")
      return <Cocktail cocktail={this.props.cocktail}/>
    } else if (thisState === 'createCocktail') {
      // console.log("cocktail form will be rendered")
      return <CocktailForm2 cocktail={this.props.cocktail}
                handleChange={this.props.handleChange}
                handleCocktailSubmit={this.props.handleCocktailSubmit}
              />
    } else if (thisState === 'blank') {
      return <div>Checkout your list</div>
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
