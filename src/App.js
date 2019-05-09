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
    fetch(Cocktail_URL + `/${cocktail.id}`)
    .then(res => res.json())
    .then(cocktail => {
      this.setState({ cocktail, displayThis: 'cocktailInfo' })
    })
  }

  next10 = () => {
    const index = this.state.index + 10 >= this.state.filteredcocktaillist.length ? 0 :
      this.state.index + 10;
    this.setState({ index })
  }

  prev10 = () => {
    const index = this.state.index - 10 < 0 ?
      this.state.filteredcocktaillist.length - 10 : this.state.index - 10;
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
    this.setState(state);
    this.handleChange(value);
  }

  handleChange = (value) => {
    let filteredcocktaillist = this.state.cocktaillist.filter(cocktail => {
      if (cocktail.name.toLowerCase().startsWith(value.toLowerCase()) &&
          cocktail.name !== null) {
        return true;
      }
      return false;
    })
    this.setState({ index: 0, filteredcocktaillist: filteredcocktaillist })
  }

  handleCocktailSubmit = (cocktail) => {

    //send this data to Cocktail_URL
    let cocktailData = {
      name: cocktail.name,
      description: cocktail.description,
      instructions: cocktail.instructions,
      source: '',
    }

    fetch(Cocktail_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cocktailData)
    })
    .then(res => res.json())
    .then(data => {
      let {name, description, instructions} = data
      cocktail = {
        name: name,
        description: description,
        instructions: instructions,
        proportions: cocktail.proportions
      }
      // console.log(cocktail)
      this.setState({ cocktaillist: [...this.state.cocktaillist, cocktail],
                      displayThis: "cocktailInfo", cocktail: cocktail});
    })
  }

  onDeleteClick = (cocktail) => {

    let cocktaillist = this.state.cocktaillist;
    let index = cocktaillist.findIndex((c, index) => {
      return c.id === cocktail.id
    });
    let removed = cocktaillist.splice(index, 1);
    this.setState({cocktaillist})

    fetch(Cocktail_URL + `/${cocktail.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({cocktail})
    })
    .then(res => res.json())
  }

  render() {
    return (
      <React.Fragment>
        <h1>Fancy Cocktail Recipes</h1>
        <input type="text" name="search" onChange={(ev) => this.onChange(ev)}
               placeholder="Search by cocktail" value={this.state.search}/>
        <div className="app-div">
          <CocktailContainer
            cocktails={this.state.filteredcocktaillist.slice(this.state.index, this.state.index + 10)}
            handleCocktailClick={this.handleCocktailClick}
            next10={this.next10}
            prev10={this.prev10}
            onCreateCocktailButton={this.onCreateCocktailButton}
          />
          <DisplayContainer
            displayThis={this.state.displayThis}
            cocktail={this.state.cocktail}
            handleChange={this.handleChange}
            handleCocktailSubmit={this.handleCocktailSubmit}
            onDeleteClick={this.onDeleteClick}
          />
        </div>
      </React.Fragment>
    )
  }
}
