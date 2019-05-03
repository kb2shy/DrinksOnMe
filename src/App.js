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
      index: 0,
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
    // this.setState({ cocktail })
    fetch(Cocktail_URL + `/${cocktail.id}`)
    .then(res => res.json())
    .then(cocktail => {
      this.setState({ cocktail }, ()=>console.log(cocktail))
    })
  }

  next5 = () => {
    const index = this.state.index + 5 >= this.state.cocktaillist.length ? 0 :
      this.state.index + 5;
    this.setState({ index })
  }

  prev5 = () => {
    const index = this.state.index - 5 < 0 ?
      this.state.index = this.state.cocktaillist.length - 5 : this.state.index - 5;
    this.setState({ index })
  }

  render() {
    return (
      <div>
        <h1>Mod 4 solo React App from scratch</h1>
        <h3>Number of cocktails in cocktail list: {this.state.cocktaillist.length} </h3>
        <div className="app-div">
          <CocktailContainer
            cocktails={this.state.cocktaillist.slice(this.state.index, this.state.index + 5)}
            handleCocktailClick={this.handleCocktailClick}
            next5={this.next5}
            prev5={this.prev5}
          />
          <DisplayContainer cocktail={this.state.cocktail}/>
        </div>
      </div>
    )
  }
}
