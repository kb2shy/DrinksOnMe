import React, { Component } from 'react';

export default class Proportions extends Component {

  render() {
    return (
      <div key={index}>
        <input
          type="text"
          name={ingId}
          data-id={index}
          id={ingId}
          value={this.props.proportions[index].ingredient_name}
          className='ingredient_name'
        />
        <input
          type="text"
          name={amtId}
          data-id={index}
          id={amtId}
          value={this.props.proportions[index].amount}
          className='amount'
        />
        <button onClick={(e) => {e.preventDefault(); this.addIngredient(ing)}}>Add</button>
        <button onClick={(e) => {e.preventDefault(); this.removeIngredient(index)}}>Remove</button>
      </div>
    )
  }
}
