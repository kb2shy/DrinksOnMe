import React from 'react';
import logo from './logo.svg';
import './App.css';
import CocktailContainer from './containers/CocktailContainer';

export default class App extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div>
        Mod 4 solo React App from scratch
        <CocktailContainer />
      </div>
    )
  }
}
