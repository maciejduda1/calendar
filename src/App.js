import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import Calendar from './client/components/CalendarContainer';
import Nav from './client/components/NavContainer';
import './App.css';
import Month from './client/presentational/Month';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App cover-container d-flex w-100 h-100 mx-auto flex-column">
          <Nav />
          <main role="main" className="inner cover">
            <Route path='/' exact component={Calendar} />
            <Route path='/month' exact component={Month} />
          </main>
          <footer className="mastfoot mt-auto">
            <div className="inner">
              <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
