import React from 'react';
class Post extends React.Component {
  render() {
    return (
      <div class="first_post">
        <div class="first-line">{this.props.time}</div>
        <img src="./tachometer.png" alt="user"></img>
        <div class="content_of_message">{this.props.content}</div>
      </div>
      );
    }
  }

  export default Post;