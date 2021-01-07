// project Fileuploader at react chapter.
// not sure how the ...file was used in file # 2 belwow. as entry to the list itme component 

// com.. file  1 index.js file  
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const FILES = [
  { "fileType": "jpg", "size": "4.3MB", "name": "me on skis.jpg", "status": "Synced" },

  { "fileType": "mov", "size": "1.3GB", "name": "cats falling.mov", "status": "Uploaded" },

  { "fileType": "txt", "size": "0.9KB", "name": "My December expenses.txt", "status": "Uploaded" },

  { "fileType": "mp3", "size": "3.4MB", "name": "disturbed_sound_of_silence.mp3", "status": "New" },
];

ReactDOM.render(<App files={FILES} />, document.getElementById('root'));


// com.. file # 2  


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
    /// why use the spread op here ?, 
    // does the listItem need to have a 'x = file' ? prop
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


// com.. file # 3  the list item  component.

import React, { Component } from 'react';
import './ListItem.css';
import ControlBar from '../ControlBar/ControlBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileImage,
  faFileAudio,
  faFileAlt,
  faFileVideo
} from '@fortawesome/free-solid-svg-icons';
// type 

class ListItem extends Component {
  render() {
    console.log('IN ListItem'); // dbg..
    const icons = {
      "jpg": faFileImage,
      "mov": faFileVideo,
      "txt": faFileAlt,
      "mp3": faFileAudio
    }

    console.log('this.prop :>> ', this.props); // dbg..

      // com.. dislplay the list of file items 
    return (
      <div className="ListItem">
        <div className="ListItem__icon">
          <div className="ListItem__circle">
            <FontAwesomeIcon icon={icons[this.props.fileType] || faFileAlt} />
          </div>
        </div>
        <div className="ListItem__content">
          <div className="ListItem__heading">
            <div className="ListItem__title">{this.props.name}</div>
            <div className="ListItem__size">{this.props.size}</div>
          </div>
          <div className="ListItem__actions">
            <div className="ListItem__status">
              {this.props.status}
            </div>
            <ControlBar />
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;


