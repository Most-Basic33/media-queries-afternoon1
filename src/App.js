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
    console.log(this.state.dropDownView)
    return (
      <div className='app'>
        <header className='main-header'>
          <p className='logo'>Start Bootstrap</p>
          <nav className='main_menu'>
            <span >Services</span>
            <span >Portfolio</span>
            <span>About</span>
            <span>Team</span>
            <span>Contact</span>
            
          </nav>
          <div className='dropDown' onClick={this.toggleDropDown}>Menu</div>
          {this.state.dropDownView
            ? (
              <nav className='menu-mobile'>
                <span className='span1' >Servicess</span>
                <span className='span1'>Portfolio</span>
                <span className='span1'>About</span>
                <span className='span1'>Teams</span>
                <span className='span1'>Contacts</span>
              </nav>
            ) : null}
        </header>
      </div>
    )
  }
}


export default App;
