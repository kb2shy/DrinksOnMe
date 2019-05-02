import React from 'react';
import logo from './logo.svg';
import './App.css';
import CocktailContainer from './containers/CocktailContainer';

const Cocktail_URL = "http://localhost:3000/api/v1/cocktails";

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cocktaillist: [],
    }
  }

  componentDidMount() {
    fetch(Cocktail_URL)
    .then(res => res.json())
    .then(cocktails => {
      this.setState( { cocktaillist: cocktails })
    })
  }

  render() {
    return (
      <div>
        <h1>Mod 4 solo React App from scratch</h1>
        <h3>Number of cocktails in cocktail list: {this.state.cocktaillist.length} </h3>
        <CocktailContainer cocktails={this.state.cocktaillist} />
      </div>
    )
  }
}
