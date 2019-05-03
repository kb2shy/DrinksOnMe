import React, { Component } from 'react';
import Cocktail from '../components/Cocktail'
import '../App.css'

export default class DisplayContainer extends Component {

  // Can I dynamically render a component in this container
  // based on whether the user clicked on either a cocktail or
  // a create a cocktail button

  components = {
    cocktailInfo: Cocktail
  }

  render() {
    return (
      <div className="displaycontainer-div">
        <Cocktail cocktail={this.props.cocktail} />
      </div>
    )
  }
}
