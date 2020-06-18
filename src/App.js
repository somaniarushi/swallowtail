import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import styled from "styled-components";

class App extends React.Component {
  render() {
    return <DarkMode light={{h1: "blue", h2:"green"}} dark={{h1:"white", h2:"purple"}}>
      <h1 style={{color: "blue"}}>Hi</h1>
      <h1 style={{color: "blue"}}>Hi</h1>
      <span>
        <h3>Hello</h3>
        Bye
      </span>
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
    return (
      <Main mode={this.state.mode}>
          <input type="checkbox" id="cb" onClick={this.handleClick} />
          {this.props.children}
      </Main>
    );
  }
}

const Main = styled.div`
color: black;
* {
  color: ${props => (props.mode==="light" ? "black" : "purple")} !important;
}
h1 {
  color: white;
}
`
export default App;
