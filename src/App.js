import React from 'react';
import logo from './logo.svg';
import './App.css';
import CocktailContainer from './containers/CocktailContainer';
import DisplayContainer from './containers/DisplayContainer'

const Cocktail_URL = "http://localhost:3000/api/v1/cocktails";

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cocktaillist: [],
      cocktail: {},
    }
  }

  componentDidMount() {
    fetch(Cocktail_URL)
    .then(res => res.json())
    .then(cocktails => {
      this.setState( { cocktaillist: cocktails })
    })
  }

  handleCocktailClick = (cocktail) => {
    // console.log("From app this cocktail clicked: ", cocktail);
    this.setState({ cocktail })
  }


  render() {
    return (
      <div>
        <h1>Mod 4 solo React App from scratch</h1>
        <h3>Number of cocktails in cocktail list: {this.state.cocktaillist.length} </h3>
        <div className="divy">
          <CocktailContainer cocktails={this.state.cocktaillist} handleCocktailClick={this.handleCocktailClick}/>
          <DisplayContainer cocktail={this.state.cocktail}/>
        </div>
      </div>
    )
  }
}
