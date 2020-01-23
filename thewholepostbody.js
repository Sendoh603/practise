import React from 'react';
import Post from './post'

class TheWholePostBody extends React.Component {
    render() {
      return (
        <div>
          <Post content={"asfdafa"} time={"Monday"} />
          <Post content={"dfdf"} time={"Tuesday"}/>
          <Post content={"dfafds"} time={"Sunday"}/>
        </div>
      );
    }
  }

  export default TheWholePostBody;