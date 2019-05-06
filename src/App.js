import React from 'react';
import './App.css';
import CocktailContainer from './containers/CocktailContainer';
import DisplayContainer from './containers/DisplayContainer'

const Cocktail_URL = "http://localhost:3000/api/v1/cocktails";

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cocktaillist: [],
      filteredcocktaillist: [],
      cocktail: {},
      index: 0,
      displayThis: '',
      filterByAlcohol: [],
    }
  }

  componentDidMount() {
    fetch(Cocktail_URL)
    .then(res => res.json())
    .then(cocktails => {
      this.setState( { cocktaillist: cocktails, filteredcocktaillist: cocktails, })
    })
  }

  handleCocktailClick = (cocktail) => {
    // console.log("From app this cocktail clicked: ", cocktail);
    // this.setState({ cocktail })
    fetch(Cocktail_URL + `/${cocktail.id}`)
    .then(res => res.json())
    .then(cocktail => {
      this.setState({ cocktail, displayThis: 'cocktailInfo' })
    })
  }

  next10 = () => {
    const index = this.state.index + 10 >= this.state.cocktaillist.length ? 0 :
      this.state.index + 10;
    this.setState({ index })
  }

  prev10 = () => {
    const index = this.state.index - 10 < 0 ?
      this.state.cocktaillist.length - 10 : this.state.index - 10;
    this.setState({ index })
  }

  showOnlyTheseCocktails = () => {
    let filterByAlcohol;
    fetch()
  }

  onCreateCocktailButton = () => {
    this.setState({ displayThis: 'createCocktail', cocktail: {},})
  }

  render() {
    return (
      <div>
        <h1>Mod 4 solo React App from scratch</h1>
        <h3>Number of cocktails in cocktail list: {this.state.cocktaillist.length} </h3>
        <div className="app-div">
          <CocktailContainer
            cocktails={this.state.cocktaillist.slice(this.state.index, this.state.index + 10)}
            handleCocktailClick={this.handleCocktailClick}
            next10={this.next10}
            prev10={this.prev10}
            onCreateCocktailButton={this.onCreateCocktailButton}
          />
          <DisplayContainer displayThis={this.state.displayThis} cocktail={this.state.cocktail}/>
        </div>
      </div>
    )
  }
}
