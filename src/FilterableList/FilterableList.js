import React, { Component } from 'react';
import './FilterableList.css';
import ListItem from '../ListItem/ListItem';

class FilterableList extends Component {

  // comp for showing the file list.
  render() {

    const { searchTerm, filterOption } = this.props;

    // files is the data array object from index.js name and status
    const list = this.props.files
      .filter(file => file.name.includes(searchTerm)
        && (filterOption === 'All' || file.status === filterOption))
      .map((file, key) => <ListItem {...file} Key={key} />);
    // break obj into array and pass in the whole file list array.


    return (
      <div className="FilterableList">
        {list}
      </div>
    );
  }
}


FilterableList.defaultProps = {
  files: []
};


export default FilterableList;

