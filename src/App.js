
import React, { Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'a',
      filterOption: 'Uploaded'
      // filterOption: 'All'
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption} />
          
        <FilterableList
          files={this.props.files}
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption} />
      </div>
    );
  }
}

export default App;