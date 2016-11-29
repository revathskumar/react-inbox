import React, { Component } from 'react';
import { render } from 'react-dom';

import {Router, Route, Link, browserHistory} from 'react-router';

class Inbox extends Component {
  render () {
    return (
      <div>
        <h1> A React Inbox</h1>
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

class App extends Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Title</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <Link className="mdl-navigation__link" to='/'>Inbox</Link>
              <Link className="mdl-navigation__link" to='/about'>About</Link>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">Title</span>
          <nav className="mdl-navigation">
            <Link className="mdl-navigation__link" to='/'>Inbox</Link>
            <Link className="mdl-navigation__link" to='/about'>About</Link>
          </nav>
        </div>
        <main className="mdl-layout__content">
          <div className="page-content">
            {this.props.children ? this.props.children : <Inbox />}
          </div>
        </main>
      </div>
    );
  }
}

(function(){
  render(
    <Router history={browserHistory} >
      <Route path="/" component={App} >
        <Route path="/" component={Inbox} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
    , document.getElementById('inbox-app')
  );
})();
