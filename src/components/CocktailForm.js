import React, { Component } from 'react';

export default class CocktailForm extends Component {

  constructor(){
    super();
    this.state = {
      name: '',
      description: '',
      instructions: '',
      proportions: [],
    }

  }

  onChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;

    let state = {};
    state[key] = value;

    this.setState({ state })
  }


  render() {
    return(
      <div className="cocktailform-div">
        <h1>Create Cocktail</h1>
        <form>
          Name: <input name="name" value={this.state.name} onChange={(e) => this.onChange(e)}/>
        </form>
      </div>
    )
  }
}
