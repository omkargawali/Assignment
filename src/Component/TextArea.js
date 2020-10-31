import React from 'react';
import '../App.css';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class TextArea extends React.Component {

  render() {
  
    return (
      <div className="App">
        <header className="App-header">
          <span className="Controls">
          <Select className="select">
            <MenuItem value="">
            </MenuItem>
            <MenuItem value={10}>Paragraph</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>      
            <button><strong>B</strong></button>
            <button><em>I</em></button>
            <button><u>U</u></button>
          </span>
          <textarea rows="5" className="Text" />
        </header>
      </div>
    );
  }
}
export default TextArea;