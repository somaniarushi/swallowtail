import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return <DarkMode light={{h1: "blue", h2:"green"}} dark={{h1:"black", h2:"purple"}}/>
  }
}

class DarkMode extends React.Component {
  constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
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
        {console.log(this.props[this.state.mode])}
        <h1 style={{color: this.props[this.state.mode]["h1"]}}>
            Hi
        </h1>
        <h2 style={{color: this.props[this.state.mode]["h2"]}}>Hello</h2>
      </>
    )
  }
}

export default App;
