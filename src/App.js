import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.prop = {light: 'black', dark: 'blue'}
      this.state = { mode: 'light'}
  }

  handleClick(event) {
    const target = event.target;
    if (target.checked) {
       this.setState({mode: 'dark'})
    } else {
       this.setState({mode: 'light'})
    }
  }

  render() {
    return (
      <>
      <input type="checkbox" id="cb" onClick={this.handleClick} />
      {console.log(this.prop[this.state.mode])}
      <h1 style={{
                  color: this.prop[this.state.mode]}}>
                  Hi
                  </h1>
      </>
    )
  }
}

export default App;
