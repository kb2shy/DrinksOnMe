import React, { Component } from 'react';
import Cocktail from '../components/Cocktail'
import CocktailForm from '../components/CocktailForm'
import '../App.css'

export default class DisplayContainer extends Component {

  inDisplayThis = (thisState) => {
    if (thisState === 'cocktailInfo') {
      return <Cocktail cocktail={this.props.cocktail}/>
    } else if (thisState === 'cocktailForm') {
      return <CocktailForm />
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
