import React, { Component } from 'react';
import Calendar from './client/components/CalendarContainer';
import Nav from './client/components/NavContainer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App cover-container d-flex w-100 h-100 mx-auto flex-column">
        <header className="masthead mb-auto">
          <div className="inner">
            <h3 className="masthead-brand">Calendar App</h3>
            <Nav />
          </div>
        </header>
        <main role="main" className="inner cover">
          <div id="root" className="album py-5">
            <Calendar />
          </div>
        </main>
        <footer className="mastfoot mt-auto">
          <div className="inner">
            <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
