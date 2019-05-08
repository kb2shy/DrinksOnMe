import React, { Component } from 'react';
// import Proportions from './Proportions';

export default class CocktailForm extends Component {
  constructor() {
    super()
    this.state = {
      proportions: [{ingredient_name: '', amount: ''}],
      name: '',
      description: '',
      instructions: '',
    }
  }

  addIngredient = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      proportions: [...prevState.proportions, {ingredient_name:"", amount:""}],
    }));
  }

  handleChange = (e) => {
    if (e.target.name === "name") {
      this.props.handleChange(e.target.value.toLowerCase())
    }
    if (["ingredient_name", "amount"].includes(e.target.className)) {
      let proportions = [...this.state.proportions];
      proportions[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({proportions})
    } else {
      this.setState({[e.target.name]: e.target.value})
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let cocktail = this.state;
    this.props.handleCocktailSubmit(cocktail);
    // console.log("submit button pressed", this.state)
  }

  render() {
    // console.log(this.state)
    // console.log(this.state)
    let {name, description, instructions, proportions} = this.state;
    return (
      <div className="cocktailform-div">
        <h1>Create Cocktail Form</h1>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        Name: <input type="text" name="name" value={name}/>
        <br/>
        Description: <input type="text" name="description" value={description}/>
        <br/>
        Instructions: <input type="text" name="instructions" value={instructions}/>
        <br/>
        <button onClick={this.addIngredient}>Add Ingredient</button>
        {proportions.map((val, idx) => {
          let ingId = `ing-${idx}`, amtId=`amt-${idx}`;
          return (
            <div key={idx}>
              <input
                type="text"
                name={ingId}
                data-id={idx}
                id={ingId}
                className="ingredient_name"
                placeholder="ingredient name"
              />
              <input
                type="text"
                name={amtId}
                data-id={idx}
                id={amtId}
                className="amount"
                placeholder="amount"
              />
            </div>
          )})}
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
