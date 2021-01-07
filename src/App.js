import React, { cloneElement, Component } from 'react';
import './App.css';
import SearchBar from './SearchBar/SearchBar';
import FilterableList from './FilterableList/FilterableList';
import { faCloudMeatball } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterOption: 'All'
    };
  }

  updateSearchTerm(term) {
    console.log('IN updateSearchTerm'); // dbg..
    this.setState({
      searchTerm: term
    })
  }

  updateFilterOption(option) {
    console.log('IN updateFilterOption'); // dbg..
    this.setState({
      filterOption: option
    })
  }


  render() {
    console.log('IN main render'); // dbg..
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          // handle terminal entry
          handleUpdate={term => this.updateSearchTerm(term)}
          handleFilterChange={option => this.updateFilterOption(option)} />
        <FilterableList
          files={this.props.files}
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption} />
      </div>
    );
  }
}

export default App;