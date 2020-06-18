import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return <DarkMode light="blue" dark="black">
      <h1>Hi</h1>
    </DarkMode>
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
    const children = this.props.children;
    React.Children.forEach(children, (child => {
      console.log(child.type)
      return child;
    }));
    return (
      <>
        <input type="checkbox" id="cb" onClick={this.handleClick} />

      </>
    )
  }
}

export default App;
