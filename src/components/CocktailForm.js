import React, { Component } from 'react';
// import Proportions from './Proportions'

export default class CocktailForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: '',
      instructions: '',
      proportions: [{
        ingredient_name: '',
        amount: ''
      }],
    }

  }

  onChange = (e) => {
    if (["ingredient_name", "amount"].includes(e.target.className)) {
      let proportions = [...this.state.proportions];
      proportions[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({proportions}, () => console.log(this.state.proportions))
    }
    let key = e.target.name;
    let value = e.target.value;

    let state = {};
    state[key] = value;

    if (key === 'name') {
      this.props.handleChange(value);
    }

    this.setState(state)
    // console.log(state)
  }

  onIngredientChange = (e) => {
      let proportions = [...this.state.proportions];
      proportions[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({proportions}, () => console.log(this.state.proportions));
  }

  addIngredientField = (ing, index) => {
    let ingId = `ing-${index}`, amtId = `amt-${index}`
    return (
      <div key={index}>
        <input id={ingId} type="text" name={ingId} data-id={index} className="ingredient_name"
          placeholder="ingredient name" onChange={this.onIngredientChange} value={this.state.proportions[index].ingredient_name}
        />
        <input id={amtId} type="text" name={amtId} data-id={index} className="amount"
          placeholder="amount" onChange={this.onIngredientChange} value={this.state.proportions[index].amount}
        />
        <button onClick={(e) => {e.preventDefault(); this.addIngredient(ing)}}>Add</button>
        <button onClick={(e) => {e.preventDefault(); this.removeIngredient(index)}}>Remove</button>
      </div>
    )
  }

  addIngredient = (ing) => {
    this.setState({ proportions: [...this.state.proportions, ing] })
  }

  removeIngredient = (index) => {
    // console.log("delete button pressed")
    if (this.state.proportions.length === 1) return;
    let proportions = this.state.proportions;
    proportions.splice(index);
    // console.log("this index to be deleted", index);
    // console.log(proportions)
    this.setState({proportions})
  }

  handleCocktailSubmit = (ev) => {
    ev.preventDefault();
    console.log("submit button pressed", this.state);
  }

  render() {
    let {name, description, instructions, proportions} = this.state;
    return (
      <div className="cocktailform-div">
        <h1>Create Cocktail</h1>
        <form onChange={this.handleChange} onSubmit={this.handleCocktailSubmit}>
          Name: <input type="text" name="name" value={name}
            onChange={this.onChange}/>
          <br/>
          Description: <input type="text" name="description"
            value={description} onChange={this.onChange}/>
          <br/>
          Instructions: <input type="text" name="instructions"
            value={instructions} onChange={this.onChange}/>
          <br/>
          <div>
            <h4>Proportions:</h4>
            <ul>
              {proportions.map((ing, idx) => {
                return this.addIngredientField(ing, idx)
              })}
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
