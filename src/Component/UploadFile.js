import React from 'react';
import '../App.css';


class UploadFile extends React.Component {
    upload(e) {
    }
  render() {
    return (
        <div class="wrapper">
          <p>Attachment <i class="fa fa-question-circle"></i></p>
          <div class="upload-container">
            <div class="border-container">
              <div class="icons fa-4x">
                <i class="fa fa-picture-o" aria-hidden="true"></i> 
              </div>
                <a href="#" id="file-browser">Click here to upload File(s)</a> 
                <input type='file' onChange={(e)=>this.upload(e)} name='img'/>
            </div>
          </div>
        </div>
    );
  }
}
export default UploadFile;