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
      search: '',
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

  onChange = (ev) => {
    let key = ev.target.name;
    let value = ev.target.value;
    let state = {};
    state[key] = value;
    console.log(this.state.search)
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h1>Fancy Cocktails</h1>
        <input type="text" name="search" onChange={this.onChange} placeholder="Search by cocktail"/>
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
