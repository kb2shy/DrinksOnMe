import React, { Component } from 'react';

export default class CocktailForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: '',
      instructions: '',
      proportions: [''],
      ingIndex: 0,
      ingValue: '',
    }

  }

  onChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;

    let state = {};
    state[key] = value;

    this.setState(state)
  }

  addIngredientField = (ing, index) => {
    return (<div key={index}>
      <input value={ing.value} name={index} onChange={this.onChange}/>
      <button onClick={(e) => {e.preventDefault(); this.addIngredient(ing)}}>Add</button>
      </div>
    )
  }

  addIngredient = (ing) => {
    this.setState( { proportions: [...this.state.proportions, ing]})
  }

  render() {
    return (
      <div className="cocktailform-div">
        <h1>Create Cocktail</h1>
        <form>
          Name: <input type="text" name="name" value={this.state.name}
            onChange={this.onChange}/>
          <br/>
          Description: <input type="text" name="description"
            value={this.state.description} onChange={this.onChange}/>
          <br/>
          Instructions: <input type="text" name="instructions"
            value={this.state.instructions} onChange={this.onChange}/>
          <br/>
          <div>
            <h4>Proportions:</h4>
            <ul>
              {this.state.proportions.map((ing, index) => this.addIngredientField(ing, index))}
            </ul>

          </div>
          <div className="createcocktailsubmitbtn">
            <input type="submit" value="Create Cocktail"/>
          </div>
        </form>
      </div>
    )
  }
}
