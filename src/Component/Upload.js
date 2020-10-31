import React from 'react';
import '../App.css';
class Upload extends React.Component {
  upload(e) {
    
  }
  render() {
    return (
        <div class="wrapper1">
        <div class="upload-container1">
          <div class="border-container1">
            <div class="icons1 fa-4x">
              <i class="fa fa-picture-o" aria-hidden="true"></i> 
            </div>
              <a href="#" id="file-browser"> upload Image </a> 
              <input className= "Hide" type='file' onChange={(e)=>this.upload(e)} name='img' />
          </div>
        </div>
      </div>
    );
  }
}
export default Upload;