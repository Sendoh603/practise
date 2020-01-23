import React from 'react';
import Header from './header.js';
import AddNewStatusBox from './addnewstatusbox.js';
import TheWholePostBody from './thewholepostbody';

class TheWholeBody extends React.Component {
    render() {
      return (
        <div>
          <Header />
          <AddNewStatusBox />
          <TheWholePostBody />
        </div>
      );
    }
  }

export default TheWholeBody;