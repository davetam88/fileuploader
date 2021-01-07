
import React, { Component } from 'react';
import './FilterableList.css';
import ListItem from '../ListItem/ListItem';

class FilterableList extends Component {

  render() {

    console.log('IN FilterableList'); // dbg..
    const { searchTerm, filterOption } = this.props;

    // files is the data array object from index.js name and status
    const list = this.props.files
      .filter(file => file.name.includes(searchTerm)
        && (filterOption === 'All' || file.status === filterOption))
      .map((file, key) => <ListItem {...file} Key={key} />);
    /// why use the spread op here ?, how camn the ...file do not has equal
    {/* /// <HelloWorld count={123} step={2} /> */ }
    console.log('list :>> ', list); // dbg..

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

