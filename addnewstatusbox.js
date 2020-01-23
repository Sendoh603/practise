import React from 'react';
class AddNewStatusBox extends React.Component {
    render() {
      return (
        <div class="add_new_status-box">
          <div class="add_new_status">Add New Status</div>
          <input type="text" placeholder="Message goes here..." class="message"></input>
          <div class="button">
              <button>Post</button>
          </div>
        </div>
        );
      }
    }
export default AddNewStatusBox;