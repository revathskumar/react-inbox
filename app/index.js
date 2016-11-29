import React, { Component } from 'react';
import { render } from 'react-dom';

import {Router, Route, Link, browserHistory} from 'react-router';

class Inbox extends Component {
  render () {
    return (
      <div>
        <h1> A React Inbox</h1>
        <ul>
          <li><Link to='/'>Inbox</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/mail'>Mail</Link></li>
        </ul>
      </div>
    );
  }
}

class About extends Component {
  render () {
    return (
      <div>
        <h1> About </h1>
      </div>
    );
  }
}

class Mail extends Component {
  render () {
    return (
      <div>
        <h1> Mail </h1>
      </div>
    );
  }
}


(function(){
  render(
    <Router history={browserHistory} >
      <Route path="/" component={Inbox} />
      <Route path="/about" component={About} />
      <Route path="/mail" component={Mail} />
    </Router>
    , document.getElementById('inbox-app')
  );
})();
