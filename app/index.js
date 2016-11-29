import React, { Component } from 'react';
import { render } from 'react-dom';

class Inbox extends Component {
  render () {
    return (
      <div>
        <h1> A React Inbox</h1>
      </div>
    );
  }
}

(function(){
  render(<Inbox />, document.getElementById('inbox-app'));
})();
