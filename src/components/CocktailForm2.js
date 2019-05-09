import React, { Component } from 'react';
import Form  from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Grid, Col } from 'react-bootstrap'
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
    // console.log(e.target.name, ":", e.target.value)
    if (e.target.name === "name") {
      this.props.handleChange(e.target.value.toLowerCase())
    }
    if ((e.target.name).startsWith("ing")) {
      let proportions = [...this.state.proportions];
      proportions[e.target.dataset.id]["ingredient_name"] = e.target.value;
      this.setState({proportions})
      console.log(this.state)
      return
    }
    if ((e.target.name).startsWith("amt")) {
      let proportions = [...this.state.proportions];
      proportions[e.target.dataset.id]["amount"] = e.target.value;
      this.setState({proportions})
      console.log(this.state)
      return
    }
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let cocktail = this.state;
    this.props.handleCocktailSubmit(cocktail);
    console.log("submit button pressed", this.state)
  }

  render() {
    // console.log(this.state)
    // console.log(this.state)
    let {name, description, instructions, proportions} = this.state;
    return (
      <div className="cocktailform-div">
        <h1>Create Cocktail Form</h1>
        <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>

          <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control type="text" value={name} name="name"/>
            <Form.Label>Description:</Form.Label>
            <Form.Control as='textarea' value={description} name="description"/>
            <Form.Label>Instructions:</Form.Label>
            <Form.Control as='textarea' value={instructions} name="instructions"/>
          </Form.Group>

          <Button onClick={this.addIngredient}>
            Add Ingredient
          </Button>

          {proportions.map((val, idx) => {
            let ingId = `ing-${idx}`, amtId=`amt-${idx}`;
            return (
              <div key={idx}>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Control
                      type="text"
                      name={ingId}
                      data-id={idx}
                      id={ingId}
                      className="ingredient_name"
                      placeholder="ingredient name"
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Control
                      type="text"
                      name={amtId}
                      data-id={idx}
                      id={amtId}
                      className="amount"
                      placeholder="amount"
                    />
                  </Form.Group>
                </Form.Row>
              </div>
            )})}

            <Form.Row>
              <Form.Group>
                <Form.Control type="submit" value="Submit" size="sm"/>
              </Form.Group>
            </Form.Row>

        </Form>

      </div>
    )
  }
}
