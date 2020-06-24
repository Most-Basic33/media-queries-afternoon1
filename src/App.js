import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDownView: false
    }
  }
  toggleDropDown = () => {
    this.setState({ dropDownView: !this.state.dropDownView })
  }

  render() {
    return (
      <div className='app'>
        <header className='main-header'>
          <span>Start Bootstrap</span>
          <nav className='menu'>
            <span>Services</span>
            <span>Portfolio</span>
            <span>About</span>
            <span>Team</span>
            <span>Contact</span>
          </nav>
          <div className='dropDown' onClick={this.toggleDropDown}>Menu</div>
          {this.state.dropDownView
            ? (
              <nav className='mobil'>
                <span>Services</span>
                <span>Portfolio</span>
                <span>About</span>
                <span>Team</span>
                <span>Contact</span>
              </nav>
            ) : null}
        </header>
      </div>
    )
  }
}


export default App;