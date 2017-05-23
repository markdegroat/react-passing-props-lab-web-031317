import React from 'react';
import { Component } from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';
// import FruitBasket from './FruitBasket';

// const App = () => {
//   return (
//     <FruitBasket />
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruit: [],
      filters: [],
      selectedFilter: null,
      items: []
    }
    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.fetchFilters = this.fetchFilters.bind(this)
  }

  handleFilterChange(e) {
    console.log('new filter: ', e.target.value);
    this.setState({ selectedFilter: e.target.value });
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  componentWillMount() {
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ items: fruit}));
    this.fetchFilters();
  }

  render(){
    return(
      <div className="fruit-basket">
        <Filter handleChange={this.handleFilterChange} filters={this.state.filters}/>
        <FilteredFruitList filter={this.state.selectedFilter} items={this.state.items}/>
      </div>
    )
  }

}

export default App;
